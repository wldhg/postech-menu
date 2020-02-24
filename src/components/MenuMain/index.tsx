import React from 'react';
import MenuList from './MenuList';
import Footer from './Footer';
import useI18n from '../I18n';

import $ from './style.scss';
import D from './en.d.yml';

const MenuMain: React.SFC = () => {
  const { t } = useI18n(D);

  return (
    <div className={$.container}>
      <main>
        <h1>{t('오늘의 교내 식단')}</h1>
        <MenuList />
      </main>
      <Footer />
    </div>
  );
};

export default MenuMain;
