import React, { useEffect } from 'react';
import { ActionButton } from 'office-ui-fabric-react';
import useI18n from '../../I18n';
import useAPI from '../../API';

import D from './en.d.yml';

const DispLocale: React.FC = () => {
  const { getLocale, setLocale } = useI18n(D);
  const { setAPILocale, fetchMenu } = useAPI();

  /* Locale Change */
  // Cookie manager
  const setEnglishFlag = (data?: boolean) => {
    if (typeof data !== 'boolean') {
      document.cookie = 'EnglishFlag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = `EnglishFlag=${data.toString()};expires=${
        (new Date(Date.now() + 2592000)).toUTCString() // 30 days
      };`;
    }
  };
  useEffect(() => {
    if (document.cookie.indexOf('EnglishFlag=true') > -1) {
      document.cookie = `EnglishFlag=true;expires=${
        (new Date(Date.now() + 2592000)).toUTCString() // 30 days
      };`;
    } else if (document.cookie.indexOf('EnglishFlag=false') > -1) {
      document.cookie = `EnglishFlag=false;expires=${
        (new Date(Date.now() + 2592000)).toUTCString() // 30 days
      };`;
    }
  }, []);
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

  return (
    <ActionButton onClick={toggleDispLocale}>
      {getLocale() === 'ko' ? 'English' : '한국어'}
    </ActionButton>
  );
};

export default DispLocale;
