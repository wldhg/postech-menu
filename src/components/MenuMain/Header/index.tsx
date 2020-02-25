import React from 'react';
import { Text } from 'office-ui-fabric-react';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

const Header: React.SFC = () => {
  const { t } = useI18n(D);

  return (
    <h1>
      <Text variant="xLargePlus" className={$.title}>
        {t('오늘의 교내 식단')}
      </Text>
    </h1>
  );
};

export default Header;
