import request from 'request';
import moment from 'moment';
import http from 'http';

const jigokFailed = {
  ko: {
    breakfast: ['__식단 데이터에 접근할 수 없습니다.'],
    lunch: ['__식단 데이터에 접근할 수 없습니다.'],
    dinner: ['__식단 데이터에 접근할 수 없습니다.'],
  },
  en: {
    breakfast: ['__Failed to access Laffey static service.'],
    lunch: ['__Failed to access Laffey static service.'],
    dinner: ['__Failed to access Laffey static service.'],
  },
};

let jigokTimeoutCount = 0;
const jigokTimeout = () => {
  jigokTimeoutCount += 1;
  return {
    ko: {
      breakfast: ['__API 처리 시간을 초과하였습니다.'],
      lunch: ['__API 처리 시간을 초과하였습니다.'],
      dinner: ['__API 처리 시간을 초과하였습니다.'],
    },
    en: {
      breakfast: ['__API processing timed out.'],
      lunch: ['__API processing timed out.'],
      dinner: ['__API processing timed out.'],
    },
    cnt: jigokTimeoutCount,
  };
};

let jigokMenu = {
  en: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
  ko: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
};

let jigokParsing = false;
const jigokDate = {
  en: '',
  ko: '',
};
const jigokRet = {
  en: '',
  ko: '',
};

const getStaticJigokMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  if (process.env.NEXT_PUBLIC_DISABLE_SELF_API === 'true') {
    O.setHeader('Content-Type', 'application/json; charset=utf-8');
    O.end(JSON.stringify({ listen: 'API endpoint functionality is disabled for this instance.' }));
  } else {
    // Set Locale
    let locale = (new URL(`http://localhost${I.url}`)).searchParams.get('locale');
    if (!(locale === 'ko' || locale === 'en')) {
      locale = 'ko';
    }
    // Process It
    O.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (
      jigokDate[locale] === moment().format('YYYYMMDD')
      && jigokMenu[locale].dinner.length > 0
    ) {
      O.end(jigokRet[locale]);
    } else if (jigokParsing) {
      let timeouted = false;
      setTimeout(() => {
        timeouted = true;
      }, 2000);
      const checkInterval = setInterval(() => {
        if (jigokMenu[locale].dinner.length > 0) {
          clearInterval(checkInterval);
          O.end(jigokRet[locale]);
        } else if (timeouted) {
          clearInterval(checkInterval);
        }
      }, 300);
    } else {
      jigokParsing = true;
      const targetDate = moment().format('YYYYMMDD');
      const targetURL = `https://food.podac.poapper.com/v1/menus/period/${targetDate}/${targetDate}`;
      jigokMenu = {
        en: {
          breakfast: [],
          lunch: [],
          dinner: [],
        },
        ko: {
          breakfast: [],
          lunch: [],
          dinner: [],
        },
      };
      request.get({
        url: targetURL,
      }, (error, response, raw) => {
        if (!error && response && response.statusCode === 200) {
          const timeout = setTimeout(() => {
            jigokParsing = false;
            O.end(JSON.stringify(jigokTimeout()[locale]));
          }, 1400);
          try {
            const data = JSON.parse(raw.toString());
            const bak = [];
            const bae = [];
            const bbk = [];
            const bbe = [];
            for (const list of data) {
              switch (list.type) {
                case 'BREAKFAST_A':
                  for (const item of list.foods) {
                    bak.push(item.name_kor);
                    bae.push(item.name_eng);
                  }
                  break;
                case 'BREAKFAST_B':
                  for (const item of list.foods) {
                    bbk.push(item.name_kor);
                    bbe.push(item.name_eng);
                  }
                  break;
                case 'LUNCH':
                  for (const item of list.foods) {
                    jigokMenu.ko.lunch.push(item.name_kor);
                    jigokMenu.en.lunch.push(item.name_eng);
                  }
                  break;
                case 'DINNER':
                  for (const item of list.foods) {
                    jigokMenu.ko.dinner.push(item.name_kor);
                    jigokMenu.en.dinner.push(item.name_eng);
                  }
                  break;
                default:
                  break;
              }
            }
            if (bbk.length > 0) {
              jigokMenu.ko.breakfast = ['== 정식', ...bak, '== 빵', ...bbk];
              jigokMenu.en.breakfast = ['== Regular Meal', ...bae, '== Western Meal', ...bbe];
            } else {
              jigokMenu.ko.breakfast = bak;
              jigokMenu.en.breakfast = bae;
            }
            clearTimeout(timeout);
            jigokRet.en = JSON.stringify(jigokMenu.en);
            jigokRet.ko = JSON.stringify(jigokMenu.ko);
            jigokDate.en = targetDate;
            jigokDate.ko = targetDate;
            jigokParsing = false;
            O.end(jigokRet[locale]);
          } catch (e) {
            clearTimeout(timeout);
            jigokParsing = false;
            O.end(JSON.stringify(jigokFailed[locale]));
          }
        } else {
          jigokParsing = false;
          O.end(JSON.stringify(jigokFailed[locale]));
        }
      });
    }
  }
};

export default getStaticJigokMenu;
