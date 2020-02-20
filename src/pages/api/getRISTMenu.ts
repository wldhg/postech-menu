import request from 'request';
import moment from 'moment';
import http from 'http';

const ristFailed = {
  lunch: ['신세계 푸딩플러스 API에 접근할 수 없습니다.'],
  dinner: ['신세계 푸딩플러스 API에 접근할 수 없습니다.'],
};

const ristMenu = {
  lunch: {},
  dinner: {},
};

let ristDate = '00000000';
let ristRet = '';

const getRISTMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  if (ristDate === moment().format('YYYYMMDD')) {
    O.end(ristRet);
  } else {
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
        try {
          const data = JSON.parse(raw).result;
          if (data.length === 0) {
            ristRet = JSON.stringify({
              lunch: ['식사가 없는 날입니다.'],
              dinner: ['식사가 없는 날입니다.'],
            });
            ristDate = moment().format('YYYYMMDD');
            O.end(ristRet);
          } else {
            const timeout = setTimeout(() => {
              O.end(JSON.stringify({
                lunch: ['API 처리 시간을 초과하였습니다.'],
                dinner: ['API 처리 시간을 초과하였습니다.'],
              }));
            }, 1500);
            ristMenu.lunch = {};
            ristMenu.dinner = {};
            data.forEach((meal, idx) => {
              if (meal.meal_type_nm === '중식') {
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
                const ristLunch = [];
                const ristDinner = [];
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
                  lunch: ristLunch.length > 0 ? ristLunch : ['식사 정보가 없습니다.'],
                  dinner: ristDinner.length > 0 ? ristDinner : ['식사 정보가 없습니다.'],
                });
                ristDate = moment().format('YYYYMMDD');
                O.end(ristRet);
              }
            });
          }
        } catch (e) {
          O.end(JSON.stringify(ristFailed));
        }
      } else {
        O.end(JSON.stringify(ristFailed));
      }
    });
  }
};

export default getRISTMenu;
