import request from 'request';
import moment from 'moment';
import http from 'http';

const ristFailed = {
  ko: {
    breakfast: ['__신세계 푸딩플러스 API에 접근할 수 없습니다.'],
    lunch: ['__신세계 푸딩플러스 API에 접근할 수 없습니다.'],
    dinner: ['__신세계 푸딩플러스 API에 접근할 수 없습니다.'],
  },
  en: {
    breakfast: ['__Failed to access Shinsegae food service.'],
    lunch: ['__Failed to access Shinsegae food service.'],
    dinner: ['__Failed to access Shinsegae food service.'],
  },
};

const ristMenu = {
  breakfast: {},
  lunch: {},
  dinner: {},
};

let ristParsing = false;
let ristDate = '00000000';
let ristRet = (locale) => '';

const getRISTMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  if (process.env.NEXT_PUBLIC_DISABLE_SELF_API === 'true') {
    O.setHeader('Content-Type', 'application/json; charset=utf-8');
    O.end(JSON.stringify({ listen: 'API endpoint functionality is disabled for this instance.' }));
  } else {
    // Set Locale
    let locale = (new URL(`http://localhost${I.url}`)).searchParams.get('locale');
    if (!(locale === 'ko' || locale === 'en')) {
      locale = 'ko';
    }
    O.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (ristDate === moment().format('YYYYMMDD')) {
      O.end(ristRet(locale));
    } else if (ristParsing) {
      let timeouted = false;
      setTimeout(() => {
        timeouted = true;
      }, 2000);
      const checkInterval = setInterval(() => {
        if (Object.keys(ristMenu.dinner).length > 0) {
          clearInterval(checkInterval);
          O.end(ristRet(locale));
        } else if (timeouted) {
          clearInterval(checkInterval);
        }
      }, 1400);
    } else {
      ristParsing = true;
      request.post({
        url: 'https://ssgfoodingplus.com/fmn101.do?goTo=todayMenuJson',
        form: {
          mealid: '',
          mealTypeCd: '',
          storeCd: '05600',
          cafeCd: '01',
          menuDate: moment().format('YYYY-MM-DD'),
        },
      }, (error, response, raw) => {
        if (!error && response && response.statusCode === 200) {
          const timeout = setTimeout(() => {
            ristParsing = false;
            O.end(JSON.stringify({
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
            }[locale]));
          }, 6100);
          try {
            const data = JSON.parse(raw).result;
            if (data.length === 0) {
              clearTimeout(timeout);
              ristRet = (lo) => JSON.stringify({
                ko: {
                  breakfast: ['__식사가 없는 날입니다.'],
                  lunch: ['__식사가 없는 날입니다.'],
                  dinner: ['__식사가 없는 날입니다.'],
                },
                en: {
                  breakfast: ['__There\'re no meals today.'],
                  lunch: ['__There\'re no meals today.'],
                  dinner: ['__There\'re no meals today.'],
                },
              }[lo]);
              ristDate = moment().format('YYYYMMDD');
              ristParsing = false;
              O.end(ristRet(locale));
            } else {
              ristMenu.breakfast = {};
              ristMenu.lunch = {};
              ristMenu.dinner = {};
              for (let idx = 0; idx < data.length; idx += 1) {
                const meal = data[idx];
                if (meal.if_menu_nm.indexOf('R)') === 0) {
                  meal.if_menu_nm = meal.if_menu_nm.substring(2).trim();
                }
                if (meal.meal_type_nm === '조식') {
                  if (ristMenu.breakfast[meal.dinner_type_nm]) {
                    ristMenu.breakfast[meal.dinner_type_nm].push(meal.if_menu_nm);
                  } else {
                    ristMenu.breakfast[meal.dinner_type_nm] = [meal.if_menu_nm];
                  }
                } else if (meal.meal_type_nm === '중식') {
                  if (ristMenu.lunch[meal.dinner_type_nm]) {
                    ristMenu.lunch[meal.dinner_type_nm].push(meal.if_menu_nm);
                  } else {
                    ristMenu.lunch[meal.dinner_type_nm] = [meal.if_menu_nm];
                  }
                } else if (meal.meal_type_nm === '석식') {
                  if (ristMenu.dinner[meal.dinner_type_nm]) {
                    ristMenu.dinner[meal.dinner_type_nm].push(meal.if_menu_nm);
                  } else {
                    ristMenu.dinner[meal.dinner_type_nm] = [meal.if_menu_nm];
                  }
                }
                if (idx === (data.length - 1)) {
                  clearTimeout(timeout);
                  const ristBreakfast = [];
                  const ristLunch = [];
                  const ristDinner = [];
                  Object.keys(ristMenu.breakfast).forEach((bk) => {
                    ristBreakfast.push(`== ${bk}`);
                    ristBreakfast.push(...ristMenu.breakfast[bk]);
                  });
                  Object.keys(ristMenu.lunch).forEach((lk) => {
                    ristLunch.push(`== ${lk}`);
                    ristLunch.push(...ristMenu.lunch[lk]);
                  });
                  Object.keys(ristMenu.dinner).forEach((dk) => {
                    ristDinner.push(`== ${dk}`);
                    ristDinner.push(...ristMenu.dinner[dk]);
                  });
                  const noMealInfo = {
                    ko: ['__식사 정보가 없습니다.'],
                    en: ['__There\'s no meal information.'],
                  };
                  ristRet = (lo) => JSON.stringify({
                    breakfast: ristBreakfast.length > 0 ? ristBreakfast : noMealInfo[lo],
                    lunch: ristLunch.length > 0 ? ristLunch : noMealInfo[lo],
                    dinner: ristDinner.length > 0 ? ristDinner : noMealInfo[lo],
                  });
                  ristDate = moment().format('YYYYMMDD');
                  ristParsing = false;
                  O.end(ristRet(locale));
                }
              }
            }
          } catch (e) {
            clearTimeout(timeout);
            ristParsing = false;
            O.end(JSON.stringify(ristFailed[locale]));
          }
        } else {
          ristParsing = false;
          O.end(JSON.stringify(ristFailed[locale]));
        }
      });
    }
  }
};

export default getRISTMenu;
