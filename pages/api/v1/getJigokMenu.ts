import request from 'request';
import cheerio from 'cheerio';
import moment from 'moment';
import http from 'http';

const jigokFailed = {
  ko: {
    breakfast: ['복지회 식단 데이터에 접근할 수 없습니다.'],
    lunch: ['복지회 식단 데이터에 접근할 수 없습니다.'],
    dinner: ['복지회 식단 데이터에 접근할 수 없습니다.'],
  },
  en: {
    breakfast: ['Failed to access POSTECH food service.'],
    lunch: ['Failed to access POSTECH food service.'],
    dinner: ['Failed to access POSTECH food service.'],
  },
};

let jigokTimeoutCount = 0;
const jigokTimeout = () => {
  jigokTimeoutCount += 1;
  return {
    ko: {
      breakfast: ['API 처리 시간을 초과하였습니다.'],
      lunch: ['API 처리 시간을 초과하였습니다.'],
      dinner: ['API 처리 시간을 초과하였습니다.'],
    },
    en: {
      breakfast: ['API processing timed out.'],
      lunch: ['API processing timed out.'],
      dinner: ['API processing timed out.'],
    },
    cnt: jigokTimeoutCount,
  };
};

const jigokNoMenu = {
  ko: {
    breakfast: ['식사가 없는 날입니다.'],
    lunch: ['식사가 없는 날입니다.'],
    dinner: ['식사가 없는 날입니다.'],
  },
  en: {
    breakfast: ['There\'re no meals today.'],
    lunch: ['There\'re no meals today.'],
    dinner: ['There\'re no meals today.'],
  },
};

const jigokMenu = {
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

const getJigokMenu = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
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
    }, 7000);
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
    jigokMenu[locale].breakfast = [];
    jigokMenu[locale].lunch = [];
    jigokMenu[locale].dinner = [];
    request.get({
      url: 'http://fd.postech.ac.kr/bbs/today_menu.php?bo_table=weekly',
    }, (error, response, raw) => {
      if (!error && response && response.statusCode === 200) {
        const timeout = setTimeout(() => {
          jigokParsing = false;
          O.end(JSON.stringify(jigokTimeout()[locale]));
        }, 6100);
        try {
          const body = cheerio.load(raw);
          body('.list_td tr').each((ri, tr) => {
            if (ri === 3) {
              if (body(tr).text().indexOf('등록된 메뉴가 없습니다') > -1) {
                clearTimeout(timeout);
                jigokMenu[locale] = jigokNoMenu[locale];
                jigokRet[locale] = JSON.stringify(jigokMenu[locale]);
                jigokDate[locale] = moment().format('YYYYMMDD');
                jigokParsing = false;
                O.end(jigokRet[locale]);
              } else {
                // Define parsing function
                const parse = (td) => {
                  const text: string = td.text();
                  let parsed = [text];
                  if (text.indexOf('"') === 0) {
                    parsed = text.substring(1, text.length - 1).split('"\n"')
                      .map((item) => {
                        const splitedItem = item.split('\n');
                        let menuName = splitedItem[0];
                        if (locale === 'ko') {
                          for (let i = 1; i < splitedItem.length; i += 1) {
                            if (splitedItem[i].match(/[a-zA-Z]/g) === null) {
                              menuName += ` ${splitedItem[i]}`;
                            } else {
                              break;
                            }
                          }
                        } else {
                          for (let i = 1; i < splitedItem.length; i += 1) {
                            if (splitedItem[i].match(/[a-zA-Z]/g) !== null) {
                              menuName = splitedItem.slice(i).join(' ');
                              break;
                            }
                          }
                        }
                        return menuName;
                      });
                  } else if (text.indexOf('\n') === -1) {
                    if (locale === 'ko') {
                      parsed = [text.substring(0, text.indexOf(' '))];
                    } else {
                      parsed = [text.substring(text.indexOf(' '))];
                    }
                  }
                  return parsed;
                };
                const getParsed = (type, btd) => {
                  /* eslint-disable no-else-return */
                  const td = btd[0];
                  if (td.attribs && td.attribs.colspan && td.attribs.colspan === '2') {
                    // One Menu
                    jigokMenu[locale][type] = parse(btd);
                    return true;
                  } else if (Object.keys(jigokMenu[locale][type]).length === 0) {
                    // Two Menu A
                    jigokMenu[locale][type].push(locale === 'ko' ? '== A 코너' : '== A Course');
                    jigokMenu[locale][type].push(...parse(btd));
                    return false;
                  } else {
                    // Two Menu B
                    jigokMenu[locale][type].push(locale === 'ko' ? '== B 코너' : '== B Course');
                    jigokMenu[locale][type].push(...parse(btd));
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
                    jigokRet[locale] = JSON.stringify(jigokMenu[locale]);
                    jigokDate[locale] = moment().format('YYYYMMDD');
                    jigokParsing = false;
                    O.end(jigokRet[locale]);
                  }
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
};

export default getJigokMenu;
