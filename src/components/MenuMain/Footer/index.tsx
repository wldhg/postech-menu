import React from 'react';
import {
  ActionButton, Text,
} from 'office-ui-fabric-react';
import BrightnessMode from './BrightnessMode';
import CaptureMenu from './CaptureMenu';
import DispLocale from './DispLocale';
import CookieInfo from './CookieInfo';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

const Footer: React.SFC = () => {
  /* States */
  const { t } = useI18n(D);

  /* Delivery Menu */
  const movePolivery = () => {
    window.location.href = 'http://polivery.ml/?search';
  };

  /* Render */
  return (
    <footer>
      <div>
        <ActionButton onClick={movePolivery} title={t('Polivery 바로가기')}>
          {t('배달 음식')}
        </ActionButton>
        {/* <ActionButton disabled>교직원 식당 보기</ActionButton> */}
        <CaptureMenu />
        <BrightnessMode />
        <DispLocale />
        {/* <ActionButton disabled>API</ActionButton> */}
      </div>
      <div>
        <CookieInfo />
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
        <Text variant="smallPlus">20200225.2</Text>
      </p>
    </footer>
  );
};

export default Footer;
