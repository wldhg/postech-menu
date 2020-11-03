import request from 'request';
import moment from 'moment';
import parse from 'csv-parse';
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
      // Get last monday's YYYYMMDD and it will be the file name
      const dateOffset = [6, 0, 1, 2, 3, 4, 5];
      const todayOffset = dateOffset[(new Date()).getDay()];
      const targetFileName = moment().subtract(todayOffset, 'days').format('YYYYMMDD');
      const targetCol = 2 + dateOffset[(new Date()).getDay()];
      jigokParsing = true;
      jigokMenu[locale].breakfast = [];
      jigokMenu[locale].lunch = [];
      jigokMenu[locale].dinner = [];
      request.get({
        url: `https://static.laffey.kr/pome-v0/${targetFileName}.csv`,
      }, (error, response, raw) => {
        if (!error && response && response.statusCode === 200) {
          const timeout = setTimeout(() => {
            jigokParsing = false;
            O.end(JSON.stringify(jigokTimeout()[locale]));
          }, 1400);
          try {
            parse(raw, (parseError, output) => {
              if (parseError) {
                jigokParsing = false;
                O.end(JSON.stringify(jigokFailed[locale]));
              } else {
                const menuMenuMenu = ['breakfast', 'lunch', 'dinner']; // OKAY THIS WILL BE REVISED SOMEDAYS
                const newMenu = {
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
                let menuTarget = -1;
                for (let row = 0; row < output.length; row += 1) {
                  if (output[row][0].length > 0) {
                    // New meal
                    menuTarget += 1;
                  }
                  const menMeal = menuMenuMenu[menuTarget];
                  if (output[row][1].length > 0) {
                    // New course
                    const spim = output[row][1].match(/[a-zA-Z]/g);
                    if (spim !== null && spim.length > 3) {
                      // English name
                      newMenu.en[menMeal].push(`== ${output[row][1]}`);
                    } else {
                      // Korean name
                      newMenu.ko[menMeal].push(`== ${output[row][1]}`);
                    }
                  }
                  if (output[row][targetCol].length > 0) {
                    // Parse detailed menu
                    const spim = output[row][targetCol].match(/[a-zA-Z]/g);
                    if (spim !== null && spim.length > 3) {
                      // English name
                      newMenu.en[menMeal].push(output[row][targetCol]);
                    } else {
                      // Korean name
                      newMenu.ko[menMeal].push(output[row][targetCol]);
                    }
                  }
                  if (row === output.length - 1) {
                    clearTimeout(timeout);
                    jigokMenu = newMenu;
                    jigokRet.en = JSON.stringify(jigokMenu.en);
                    jigokRet.ko = JSON.stringify(jigokMenu.ko);
                    jigokDate.en = moment().format('YYYYMMDD');
                    jigokDate.ko = moment().format('YYYYMMDD');
                    jigokParsing = false;
                    O.end(jigokRet[locale]);
                  }
                }
              }
            });
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
