import request from 'request';
import moment from 'moment';
import http from 'http';

const ristFailed = {
  breakfast: ['신세계 푸딩플러스 API에 접근할 수 없습니다.'],
  lunch: ['신세계 푸딩플러스 API에 접근할 수 없습니다.'],
  dinner: ['신세계 푸딩플러스 API에 접근할 수 없습니다.'],
};

const ristMenu = {
  breakfast: {},
  lunch: {},
  dinner: {},
};

let ristParsing = false;
let ristDate = '00000000';
let ristRet = '';

const getRISTMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  O.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (ristDate === moment().format('YYYYMMDD')) {
    O.end(ristRet);
  } else if (ristParsing) {
    let timeouted = false;
    setTimeout(() => {
      timeouted = true;
    }, 7000);
    const checkInterval = setInterval(() => {
      if (Object.keys(ristMenu.dinner).length > 0) {
        O.end(ristRet);
      } else if (timeouted) {
        clearInterval(checkInterval);
      }
    }, 300);
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
            breakfast: ['API 처리 시간을 초과하였습니다.'],
            lunch: ['API 처리 시간을 초과하였습니다.'],
            dinner: ['API 처리 시간을 초과하였습니다.'],
          }));
        }, 1500);
        try {
          const data = JSON.parse(raw).result;
          if (data.length === 0) {
            ristRet = JSON.stringify({
              breakfast: ['식사가 없는 날입니다.'],
              lunch: ['식사가 없는 날입니다.'],
              dinner: ['식사가 없는 날입니다.'],
            });
            ristDate = moment().format('YYYYMMDD');
            ristParsing = false;
            O.end(ristRet);
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
                clearTimeout(timeout);
                ristRet = JSON.stringify({
                  breakfast: ristBreakfast.length > 0 ? ristBreakfast : ['식사 정보가 없습니다.'],
                  lunch: ristLunch.length > 0 ? ristLunch : ['식사 정보가 없습니다.'],
                  dinner: ristDinner.length > 0 ? ristDinner : ['식사 정보가 없습니다.'],
                });
                ristDate = moment().format('YYYYMMDD');
                ristParsing = false;
                O.end(ristRet);
              }
            }
          }
        } catch (e) {
          clearTimeout(timeout);
          ristParsing = false;
          O.end(JSON.stringify(ristFailed));
        }
      } else {
        ristParsing = false;
        O.end(JSON.stringify(ristFailed));
      }
    });
  }
};

export default getRISTMenu;
