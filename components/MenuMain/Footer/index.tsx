import React from 'react';
import {
  ActionButton, Text,
} from '@fluentui/react';
import BrightnessMode from './BrightnessMode';
import CaptureMenu from './CaptureMenu';
import DispLocale from './DispLocale';
import ThirdPartyLicense from './3rdPartyLicense';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

const Footer: React.FC = () => {
  /* States */
  const { t, getLocale } = useI18n(D);

  /* Delivery Menu */
  const movePolivery = () => {
    window.open('http://polivery.ml/?search', '_blank').focus();
  };

  /* Error Report */
  const moveErrorReport = () => {
    window.location.href = 'mailto:dev@laffey.kr';
  };

  /* Status */
  const moveStatus = () => {
    window.open('https://status.menu.laffey.kr/', '_blank').focus();
  };

  /* Render */
  return (
    <footer>
      <div>
        <DispLocale />
        <CaptureMenu />
        <ActionButton onClick={movePolivery} title={t('Polivery 바로가기')}>
          {t('배달 음식')}
        </ActionButton>
      </div>
      <div>
        <BrightnessMode />
        <ActionButton onClick={moveErrorReport}>{t('오류 신고')}</ActionButton>
        <ActionButton onClick={moveStatus}>{t('API 상태')}</ActionButton>
        {
          getLocale() === 'en' && (
            <ThirdPartyLicense />
          )
        }
      </div>
      <p>
        <Text variant="smallPlus">{t('데이터: 포스텍 복지회, 신세계푸드.')}</Text>
        <br />
        <Text variant="smallPlus">
          {t('시스템: ')}
          <a
            href="https://github.com/wldh-g/postech-menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('실토')}
          </a>
          .
        </Text>
      </p>
      <p className={$.version}>
        <Text variant="smallPlus">{process.env.NEXT_PUBLIC_ENDPOINT_VERSION}</Text>
      </p>
    </footer>
  );
};

export default Footer;
