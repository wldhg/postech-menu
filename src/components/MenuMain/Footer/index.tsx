import React from 'react';
import {
  ActionButton, Text,
} from 'office-ui-fabric-react';
import BrightnessMode from './BrightnessMode';
import CaptureMenu from './CaptureMenu';
import DispLocale from './DispLocale';
import CookieInfo from './CookieInfo';
import ThirdPartyLicense from './3rdPartyLicense';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

const Footer: React.SFC = () => {
  /* States */
  const { t, getLocale } = useI18n(D);

  /* Delivery Menu */
  const movePolivery = () => {
    window.open('http://polivery.ml/?search', '_blank');
  };

  /* Error Report */
  const moveErrorReport = () => {
    window.location.href = 'mailto:menu-error@haze.dog';
  };

  /* GitHub */
  const moveGitHub = () => {
    window.location.href = 'https://github.com/wldh-g/postech-menu';
  };

  /* Render */
  return (
    <footer>
      <div>
        <ActionButton onClick={movePolivery} title={t('Polivery 바로가기')}>
          {t('배달 음식')}
        </ActionButton>
        <CaptureMenu />
        {/* <ActionButton disabled>식당 선택</ActionButton> */}
        <BrightnessMode />
      </div>
      <div>
        {/* <ActionButton disabled>API</ActionButton> */}
        <ActionButton onClick={moveGitHub}>GitHub</ActionButton>
        <ActionButton onClick={moveErrorReport}>{t('오류 신고')}</ActionButton>
        <CookieInfo />
        {
          getLocale() === 'en' && (
            <ThirdPartyLicense />
          )
        }
        <DispLocale />
      </div>
      <p>
        <Text variant="smallPlus">{t('데이터: 포스텍 복지회, 신세계푸드.')}</Text>
        <br />
        <Text variant="smallPlus">
          {t('시스템: ')}
          <a href="mailto:dev@haze.dog">HazeDog</a>
          .
        </Text>
      </p>
      <p className={$.version}>
        <Text variant="smallPlus">20200327.0</Text>
      </p>
    </footer>
  );
};

export default Footer;
