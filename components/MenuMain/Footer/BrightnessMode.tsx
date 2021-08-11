import React from 'react';
import { ActionButton } from '@fluentui/react';
import useI18n from 'hooks/i18n';
import useTheme from 'hooks/theme';

import D from './en.d.yml';

const BrightnessMode: React.FC = () => {
  const { t } = useI18n(D);
  const { setTheme, getTheme, isThemeLocked } = useTheme();

  /* Brightness Mode */
  // Storage manager
  const setNightConfig = (data?: boolean) => {
    if (typeof data !== 'boolean') {
      window.localStorage.removeItem('NightConfig');
    } else {
      window.localStorage.setItem('NightConfig', data.toString());
    }
  };
  // Button click action for toggle
  const toggleBrightnessMode = () => {
    if (document.documentElement.dataset?.theme === 'dark') {
      setTheme('light');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightConfig(false);
      } else {
        setNightConfig();
      }
    } else {
      setTheme('dark');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightConfig();
      } else {
        setNightConfig(true);
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
