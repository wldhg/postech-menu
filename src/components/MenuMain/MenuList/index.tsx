import React, { useEffect } from 'react';
import {
  Pivot, PivotItem,
} from 'office-ui-fabric-react';
import ListByMeal from './ListByMeal';
import useAPI from '../../API';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

/* eslint-disable react-hooks/exhaustive-deps */
const MenuList: React.SFC = () => {
  // States
  const { setAPILocale, fetchMenu } = useAPI();
  const { t, getLocale } = useI18n(D);

  // Fetch Menu Data
  useEffect(() => {
    setAPILocale(getLocale());
    fetchMenu();
  }, []);

  // Set default menu pivot item by time
  const hour = (new Date()).getHours();
  let showWhat = 'breakfast';
  if (hour >= 14) {
    showWhat = 'dinner';
  } else if (hour >= 10) {
    showWhat = 'lunch';
  }

  return (
    <Pivot className={$.menuContainer} defaultSelectedKey={showWhat}>
      <PivotItem headerText={t('아침')} itemKey="breakfast">
        <ListByMeal type="breakfast" />
      </PivotItem>
      <PivotItem headerText={t('점심')} itemKey="lunch">
        <ListByMeal type="lunch" />
      </PivotItem>
      <PivotItem headerText={t('저녁')} itemKey="dinner">
        <ListByMeal type="dinner" />
      </PivotItem>
    </Pivot>
  );
};

export default MenuList;
