import React from 'react';
import Wrapper from '../Wrapper';
import Header from './Header';
import MenuList from './MenuList';
import Footer from './Footer';

import $ from './style.scss';

const MenuMain: React.SFC = () => (
  <Wrapper main className={$.container}>
    <main>
      <Header />
      <MenuList />
    </main>
    <Footer />
  </Wrapper>
);

export default MenuMain;
