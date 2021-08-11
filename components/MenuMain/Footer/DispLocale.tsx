import React from 'react';
import { ActionButton } from '@fluentui/react';
import useI18n from 'hooks/i18n';
import useAPI from 'hooks/api';

import D from './en.d.yml';

const DispLocale: React.FC = () => {
  const { getLocale, setLocale } = useI18n(D);
  const { setAPILocale, fetchMenu } = useAPI();

  /* Locale Change */
  // Storage manager
  const setEnglishFlag = (data?: boolean) => {
    if (typeof data !== 'boolean') {
      window.localStorage.removeItem('EnglishConfig');
    } else {
      window.localStorage.setItem('EnglishConfig', data.toString());
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

  return (
    <ActionButton onClick={toggleDispLocale}>
      {getLocale() === 'ko' ? 'English' : '한국어'}
    </ActionButton>
  );
};

export default DispLocale;
