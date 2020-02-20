import request from 'request';
import cheerio from 'cheerio';
import moment from 'moment';
import http from 'http';

const jigokFailed = {
  lunch: ['복지회 식단 데이터에 접근할 수 없습니다.'],
  dinner: ['복지회 식단 데이터에 접근할 수 없습니다.'],
};

const jigokMenu = {
  lunch: [],
  dinner: [],
};

let jigokDate = '';
let jigokRet = '';

const getJigokMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  if (jigokDate === moment().format('YYYYMMDD')) {
    O.end(jigokRet);
  } else {
    let jigokPrepared = 0;
    request.get({
      url: 'http://fd.postech.ac.kr/bbs/today_menu.php?bo_table=weekly',
    }, (error, response, raw) => {
      if (!error && response && response.statusCode === 200) {
        try {
          const body = cheerio.load(raw);
          body('.list_td tr').each((ri, tr) => {
            if (ri === 3) {
              body(tr).find('td[colspan="2"]').each((di, td) => {
                if (di === 0) {
                  const lunchText = body(td).text();
                  jigokMenu.lunch = lunchText.substring(1, lunchText.length - 1).split('"\n"')
                    .map((item) => item.split('\n')[0]);
                } else {
                  const dinnerText = body(td).text();
                  jigokMenu.dinner = dinnerText.substring(1, dinnerText.length - 1).split('"\n"')
                    .map((item) => item.split('\n')[0]);
                }
                jigokPrepared += 1;
                if (jigokPrepared >= 2) {
                  jigokRet = JSON.stringify(jigokMenu);
                  jigokDate = moment().format('YYYYMMDD');
                  O.end(jigokRet);
                }
              });
            }
          });
        } catch (e) {
          O.end(JSON.stringify(jigokFailed));
        }
      } else {
        O.end(JSON.stringify(jigokFailed));
      }
    });
  }
};

export default getJigokMenu;
