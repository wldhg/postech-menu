import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';

export type I18nLocale = 'ko' | 'en';
interface I18nStruct {
  locale: I18nLocale
};

const initialLocaleContext: I18nStruct = { locale: 'ko' };
const LocaleContext = createContext<I18nStruct>(initialLocaleContext);

type I18nAction = { type: 'SET_LOCALE'; locale: I18nLocale; };
const i18nReducer = (state: I18nStruct, action: I18nAction): I18nStruct => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        locale: action.locale,
      };
    default:
      return state;
  }
};

type I18nDispatch = Dispatch<I18nAction>;
const LocaleDispatchContext = createContext<I18nDispatch | undefined>(undefined);

interface Props { children: React.ReactElement | React.ReactElement[] }
export const I18nEnabled: React.SFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(i18nReducer, initialLocaleContext);
  return (
    <LocaleDispatchContext.Provider value={dispatch}>
      <LocaleContext.Provider value={state}>
        {children}
      </LocaleContext.Provider>
    </LocaleDispatchContext.Provider>
  );
};

export const useI18n = (dict) => {
  const state = useContext(LocaleContext);
  const dispatch = useContext(LocaleDispatchContext);

  // Translator
  const t = (item: string): string => {
    let translated = item;
    if (dict[state.locale]) {
      if (dict[state.locale][item]) {
        translated = dict[state.locale][item];
      } else {
        /* eslint-disable no-console */
        console.warn(`No appropriate translation for "${item}"!`);
      }
    }
    return translated;
  };

  // Locale Setter
  const setLocale = (locale: I18nLocale): void => {
    dispatch({
      type: 'SET_LOCALE',
      locale,
    });
  };

  // Locale Getter
  const getLocale = (): I18nLocale => state.locale;

  return { t, setLocale, getLocale };
};

export default useI18n;
