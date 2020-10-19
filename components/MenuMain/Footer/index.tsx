import React from 'react';
import {
  ActionButton, Text, TooltipDelay, TooltipHost,
} from '@fluentui/react';
import HiddenText from 'components/Controls/HiddenText';
import useI18n from 'hooks/i18n';
import BrightnessMode from './BrightnessMode';
import CaptureMenu from './CaptureMenu';
import CopyText from './CopyText';
import ChangeLog from './ChangeLog';
import DispLocale from './DispLocale';
import ThirdPartyLicense from './3rdPartyLicense';

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
        <CopyText />
        <TooltipHost
          content={t('Polivery 이용이 불안정할 수 있습니다. (Polivery 측 문제입니다.)')}
          calloutProps={{
            gapSpace: 1,
          }}
          styles={{
            root: {
              display: 'inline-block',
            },
          }}
          delay={TooltipDelay.zero}
        >
          <ActionButton onClick={movePolivery} title={t('Polivery 바로가기')}>
            {t('배달 음식')}
          </ActionButton>
        </TooltipHost>
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
      <HiddenText lowerPad={2}>---</HiddenText>
      <p className={$.notSelectable}>
        <Text variant="smallPlus" className={$.selectable}>{t('데이터: 포스텍 복지회, 신세계푸드.')}</Text>
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
        <ChangeLog />
      </p>
    </footer>
  );
};

export default Footer;
