import React from 'react';
import { ActionButton } from 'office-ui-fabric-react';
import useI18n from '../../I18n';
import useTheme from '../../Theme';

import D from './en.d.yml';

const BrightnessMode: React.SFC = () => {
  const { t } = useI18n(D);
  const { setTheme, getTheme, isThemeLocked } = useTheme();

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
  const toggleBrightnessMode = () => {
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

  return (
    <ActionButton
      onClick={toggleBrightnessMode}
      title={t('밝기 모드 변경')}
      disabled={isThemeLocked()}
    >
      {getTheme() === 'dark' ? t('밝게 보기') : t('어둡게 보기')}
    </ActionButton>
  );
};

export default BrightnessMode;
