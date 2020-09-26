import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';
import { I18nLocale } from './I18n';

export type MealType = 'breakfast' | 'lunch' | 'dinner';
interface MealMultiMenu {
  [mealName: string]: string[]
};
type MealMenu = string[] | MealMultiMenu;
type MealByPlaceRaw = { [key in MealType]: string[] };
type MealByPlace = {
  loaded: boolean
  meals: { [key in MealType]?: MealMenu }
};
export type MealPlaces = 'jigok' | 'rist';
type APIDataStruct = {
  locale: I18nLocale
  places: { [key in MealPlaces]: MealByPlace }
};

const initialAPIContext: APIDataStruct = {
  locale: 'ko',
  places: {
    jigok: { loaded: false, meals: {} },
    rist: { loaded: false, meals: {} },
  },
};
const APIContext = createContext<APIDataStruct>(initialAPIContext);

type APIAction =
  | { type: 'FETCH_JIGOK'; dispatch: APIDispatch; locale?: I18nLocale; }
  | { type: 'FETCH_RIST'; dispatch: APIDispatch; locale?: I18nLocale; }
  | { type: 'SET_LOCALE'; locale: I18nLocale; }
  | { type: 'UPDATE_MENU'; place: MealPlaces; rawMenu: MealByPlaceRaw; };
const apiReducer = (state: APIDataStruct, action: APIAction): APIDataStruct => {
  switch (action.type) {
    case 'SET_LOCALE': {
      return {
        ...initialAPIContext,
        locale: action.locale,
      };
    }
    case 'FETCH_JIGOK': {
      getJigokMenu(action.locale || state.locale, action.dispatch);
      return state;
    }
    case 'FETCH_RIST': {
      getRISTMenu(action.locale || state.locale, action.dispatch);
      return state;
    }
    case 'UPDATE_MENU': {
      const ustate = { ...state };
      ustate.places[action.place].meals.breakfast = parallelizeMenu(
        action.rawMenu.breakfast, state.locale,
      );
      ustate.places[action.place].meals.lunch = parallelizeMenu(
        action.rawMenu.lunch, state.locale,
      );
      ustate.places[action.place].meals.dinner = parallelizeMenu(
        action.rawMenu.dinner, state.locale,
      );
      ustate.places[action.place].loaded = true;
      return ustate;
    }
    default: {
      return state;
    }
  }
};

type APIDispatch = Dispatch<APIAction>;
const APIDispatchContext = createContext<APIDispatch | undefined>(undefined);

interface Props { children: React.ReactElement | React.ReactElement[] }
export const APIEnabled: React.SFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(apiReducer, initialAPIContext);
  return (
    <APIDispatchContext.Provider value={dispatch}>
      <APIContext.Provider value={state}>
        {children}
      </APIContext.Provider>
    </APIDispatchContext.Provider>
  );
};

export const useAPI = () => {
  const state = useContext(APIContext);
  const dispatch = useContext(APIDispatchContext);

  // API Locale Setter
  const setAPILocale = (locale: I18nLocale): void => {
    dispatch({
      type: 'SET_LOCALE',
      locale,
    });
  };

  // API Locale Getter
  const getAPILocale = (): I18nLocale => state.locale;

  // Menu Fetcher
  const fetchMenu = (locale?: I18nLocale) => {
    if ((!state.places.jigok.loaded) || (state.locale !== locale)) {
      dispatch({ type: 'FETCH_JIGOK', dispatch, locale });
    }
    if ((!state.places.rist.loaded) || (state.locale !== locale)) {
      dispatch({ type: 'FETCH_RIST', dispatch, locale });
    }
  };

  // Menu Loaded Info Getter
  const isMenuLoaded = (place: MealPlaces): boolean => state.places[place].loaded;

  // Menu Getter
  const getMenu = (place: MealPlaces, type: MealType): (MealMenu | null) => {
    let menu = null;
    if (state.places[place].loaded) {
      menu = state.places[place].meals[type];
    }
    return menu;
  };

  return {
    setAPILocale, getAPILocale, fetchMenu, getMenu, isMenuLoaded,
  };
};

export default useAPI;

/* Real API Handlers */

interface APIResponse {
  breakfast: string[]
  lunch: string[]
  dinner: string[]
};

const ParseFailedMessage: {[key in I18nLocale]: string} = {
  en: 'Failed to parse the API response.',
  ko: 'API 응답을 해석할 수 없습니다.',
};

const APIFailedMessage: {[key in I18nLocale]: string} = {
  en: 'Invalid API request.',
  ko: 'API 요청이 잘못되었습니다.',
};
const APIFailedObject: {[key in I18nLocale]: {[key in MealType]: string[]}} = {
  en: {
    breakfast: [APIFailedMessage.en],
    lunch: [APIFailedMessage.en],
    dinner: [APIFailedMessage.en],
  },
  ko: {
    breakfast: [APIFailedMessage.ko],
    lunch: [APIFailedMessage.ko],
    dinner: [APIFailedMessage.ko],
  },
};

const APIServers = [
  'https://ant.menu.laffey.kr/api',
  'https://bb.menu.laffey.kr/api',
  'https://tx.menu.laffey.kr:9898/api',
  'https://bt.menu.laffey.kr/api',
  '/api',
];

const parallelizeMenu = (menu: string[], locale: I18nLocale): MealMenu => {
  let cache: MealMenu = [];
  if (menu.length > 0) {
    if (menu[0].indexOf('== ') === 0) {
      cache = {};
      let cacheKey = null;
      for (let idx = 0; idx < menu.length; idx += 1) {
        const item = menu[idx];
        if (item && item.indexOf('== ') === 0) {
          const key = item.substring(3);
          cache[key] = [];
          cacheKey = key;
        } else if (cacheKey && cache[cacheKey]) {
          cache[cacheKey].push(item);
        } else {
          cache = [ParseFailedMessage[locale]];
          break;
        }
      }
    } else {
      cache = menu;
    }
  }
  return cache;
};

let JigokAPIServerTarget = 0;
const JigokErrorCount = new Array(APIServers.length).fill(0);
const setNextJigokEndpoint = (trial) => {
  if (JigokErrorCount[JigokAPIServerTarget] > 2) {
    JigokAPIServerTarget += 1;
    // eslint-disable-next-line no-console
    console.info(`Using API endpoint ${JigokAPIServerTarget} for Jigok menu.`);
  } else {
    JigokErrorCount[trial] += 1;
  }
};
const getJigokMenu = (locale: I18nLocale, dispatch: APIDispatch) => {
  const jigokFailed: APIAction = {
    type: 'UPDATE_MENU', place: 'jigok', rawMenu: APIFailedObject[locale],
  };
  if (JigokAPIServerTarget >= APIServers.length) {
    dispatch(jigokFailed);
  } else {
    const trialServ = JigokAPIServerTarget;
    fetch(`${APIServers[JigokAPIServerTarget]}/v1/getJigokMenu?locale=${locale}`, {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((data: APIResponse) => {
          dispatch({
            type: 'UPDATE_MENU',
            place: 'jigok',
            rawMenu: data,
          });
        }).catch(() => {
          setNextJigokEndpoint(trialServ);
          getJigokMenu(locale, dispatch);
        });
      } else {
        setNextJigokEndpoint(trialServ);
        getJigokMenu(locale, dispatch);
      }
    }, () => {
      setNextJigokEndpoint(trialServ);
      getJigokMenu(locale, dispatch);
    });
  }
};

let RISTAPIServerTarget = 0;
const RISTErrorCount = new Array(APIServers.length).fill(0);
const setNextRISTEndpoint = (trial) => {
  if (RISTErrorCount[RISTAPIServerTarget] > 2) {
    RISTAPIServerTarget += 1;
    // eslint-disable-next-line no-console
    console.info(`Using API endpoint ${RISTAPIServerTarget} for RIST menu.`);
  } else {
    RISTErrorCount[trial] += 1;
  }
};
const getRISTMenu = (locale: I18nLocale, dispatch: APIDispatch) => {
  const ristFailed: APIAction = {
    type: 'UPDATE_MENU', place: 'rist', rawMenu: APIFailedObject[locale],
  };
  if (JigokAPIServerTarget >= APIServers.length) {
    dispatch(ristFailed);
  } else {
    const trialServ = JigokAPIServerTarget;
    fetch(`${APIServers[RISTAPIServerTarget]}/v1/getRISTMenu?locale=${locale}`, {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((data: APIResponse) => {
          dispatch({
            type: 'UPDATE_MENU',
            place: 'rist',
            rawMenu: data,
          });
        }).catch(() => {
          setNextRISTEndpoint(trialServ);
          getRISTMenu(locale, dispatch);
        });
      } else {
        setNextRISTEndpoint(trialServ);
        getRISTMenu(locale, dispatch);
      }
    }, () => {
      setNextRISTEndpoint(trialServ);
      getRISTMenu(locale, dispatch);
    });
  }
};
