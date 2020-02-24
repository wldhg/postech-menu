import request from 'request';
import cheerio from 'cheerio';
import moment from 'moment';
import http from 'http';

const jigokFailed = {
  breakfast: ['복지회 식단 데이터에 접근할 수 없습니다.'],
  lunch: ['복지회 식단 데이터에 접근할 수 없습니다.'],
  dinner: ['복지회 식단 데이터에 접근할 수 없습니다.'],
};

const jigokMenu = {
  breakfast: [],
  lunch: [],
  dinner: [],
};

let jigokDate = '';
let jigokRet = '';

const getJigokMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  O.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (jigokDate === moment().format('YYYYMMDD')) {
    O.end(jigokRet);
  } else {
    jigokMenu.breakfast = [];
    jigokMenu.lunch = [];
    jigokMenu.dinner = [];
    request.get({
      url: 'http://fd.postech.ac.kr/bbs/today_menu.php?bo_table=weekly',
    }, (error, response, raw) => {
      if (!error && response && response.statusCode === 200) {
        const timeout = setTimeout(() => {
          O.end(JSON.stringify({
            breakfast: ['API 처리 시간을 초과하였습니다.'],
            lunch: ['API 처리 시간을 초과하였습니다.'],
            dinner: ['API 처리 시간을 초과하였습니다.'],
          }));
        }, 1500);
        try {
          const body = cheerio.load(raw);
          body('.list_td tr').each((ri, tr) => {
            if (ri === 3) {
              // Define parsing function
              const parse = (td) => {
                const text: string = td.text();
                return text.substring(1, text.length - 1).split('"\n"')
                  .map((item) => item.split('\n')[0]);
              };
              const getParsed = (type, btd) => {
                /* eslint-disable no-else-return */
                const td = btd[0];
                if (td.attribs && td.attribs.colspan && td.attribs.colspan === '2') {
                  // One Menu
                  jigokMenu[type] = parse(btd);
                  return true;
                } else if (Object.keys(jigokMenu[type]).length === 0) {
                  // Two Menu A
                  jigokMenu[type].push('== A 코너');
                  jigokMenu[type].push(...parse(btd));
                  return false;
                } else {
                  // Two Menu B
                  jigokMenu[type].push('== B 코너');
                  jigokMenu[type].push(...parse(btd));
                  return true;
                }
              };
              // Parse
              let breakfastCompleted = false;
              let lunchCompleted = false;
              let dinnerCompleted = false;
              const tds = body(tr).find('td');
              for (let di = 0; di < tds.length; di += 1) {
                const btd = body(tds[di]);
                if (!breakfastCompleted) {
                  breakfastCompleted = getParsed('breakfast', btd);
                } else if (!lunchCompleted) {
                  lunchCompleted = getParsed('lunch', btd);
                } else {
                  dinnerCompleted = getParsed('dinner', btd);
                }
                if (dinnerCompleted) {
                  clearTimeout(timeout);
                  jigokRet = JSON.stringify(jigokMenu);
                  jigokDate = moment().format('YYYYMMDD');
                  O.end(jigokRet);
                }
              }
            }
          });
        } catch (e) {
          clearTimeout(timeout);
          O.end(JSON.stringify(jigokFailed));
        }
      } else {
        O.end(JSON.stringify(jigokFailed));
      }
    });
  }
};

export default getJigokMenu;
