import React from 'react';
import { ActionButton, Text } from 'office-ui-fabric-react';
import useTheme from '../../Theme';
import useI18n from '../../I18n';
import useAPI from '../../API';

import $ from './style.scss';
import D from './en.d.yml';

const Footer: React.SFC = () => {
  /* States */
  const { t, setLocale, getLocale } = useI18n(D);
  const { setTheme, getTheme } = useTheme();
  const { setAPILocale, fetchMenu } = useAPI();

  /* Brightness Mode */
  // Cookie manager
  const setNightBoy = (data?: boolean) => {
    if (typeof data !== 'boolean') {
      document.cookie = 'NightBoy=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = `NightBoy=${data.toString()};expires=${
        (new Date(Date.now() + 5184000)).toUTCString() // 60 days
      };`;
    }
  };
  // Button click action for toggle
  const toggleDispBrightnessMode = () => {
    if (document.documentElement.dataset?.theme === 'dark') {
      setTheme('light');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy(false);
      } else {
        setNightBoy();
      }
    } else {
      setTheme('dark');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy();
      } else {
        setNightBoy(true);
      }
    }
  };

  /* Delivery Menu */
  const movePolivery = () => {
    window.location.href = 'http://polivery.ml/?search';
  };

  /* Locale Change */
  // Cookie manager
  const setEnglishFlag = (data?: boolean) => {
    if (typeof data !== 'boolean') {
      document.cookie = 'EnglishFlag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = `EnglishFlag=${data.toString()};expires=${
        (new Date(Date.now() + 5184000)).toUTCString() // 60 days
      };`;
    }
  };
  // Button click action for toggle
  const toggleDispLocale = () => {
    if (getLocale() === 'ko') {
      setLocale('en');
      setAPILocale('en');
      fetchMenu('en');
      if (window.navigator.language.indexOf('ko') >= 0) {
        setEnglishFlag(true);
      } else {
        setEnglishFlag();
      }
    } else {
      setLocale('ko');
      setAPILocale('ko');
      fetchMenu('ko');
      if (window.navigator.language.indexOf('ko') >= 0) {
        setEnglishFlag();
      } else {
        setEnglishFlag(false);
      }
    }
  };

  /* Render */
  return (
    <footer>
      <div>
        <ActionButton onClick={movePolivery} title={t('Polivery 바로가기')}>
          {t('배달 음식')}
        </ActionButton>
        {/* <ActionButton disabled>교직원 식당 보기</ActionButton> */}
        <ActionButton onClick={toggleDispBrightnessMode} title={t('밝기 모드 변경')}>
          {getTheme() === 'dark' ? t('밝게 보기') : t('어둡게 보기')}
        </ActionButton>
        <ActionButton onClick={toggleDispLocale}>
          {getLocale() === 'ko' ? 'English' : '한국어'}
        </ActionButton>
        {/* <ActionButton disabled>API</ActionButton> */}
      </div>
      <p>
        <Text variant="smallPlus">{t('데이터: 포스텍 복지회, 신세계푸드.')}</Text>
        <br />
        <Text variant="smallPlus">
          {t('시스템: ')}
          <a href="mailto:dev@haze.dog">{t('아지래견')}</a>
          .
        </Text>
      </p>
      <p className={$.version}>
        <Text variant="smallPlus">20200225.1</Text>
      </p>
    </footer>
  );
};

export default Footer;
