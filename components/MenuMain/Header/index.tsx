import React from 'react';
import { Text } from '@fluentui/react';
import moment from 'moment';
import useI18n from 'hooks/i18n';

import $ from './style.scss';
import D from './en.d.yml';

const Header: React.FC = () => {
  const { t } = useI18n(D);

  return (
    <h1>
      <Text variant="xLargePlus" className={$.title}>
        {t('오늘의 교내 식단')}
      </Text>
      <Text variant="xLarge" className={$.date}>
        {moment().format(t('YYYY년 M월 D일'))}
      </Text>
    </h1>
  );
};

export default Header;
