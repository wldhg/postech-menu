import React, { useEffect, useState } from 'react';
import { Swipeable } from 'react-swipeable';
import { Pivot, PivotItem } from '@fluentui/react';
import ListByMeal from './ListByMeal';
import useAPI from '../../API';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

// Set default menu pivot item by time
const hour = (new Date()).getHours();
let defaultItem = 'breakfast';
if (hour >= 14) {
  defaultItem = 'dinner';
} else if (hour >= 10) {
  defaultItem = 'lunch';
}

/* eslint-disable react-hooks/exhaustive-deps */
const MenuList: React.FC = () => {
  // States
  const { setAPILocale, fetchMenu } = useAPI();
  const { t, getLocale } = useI18n(D);
  const [showWhat, setShow] = useState(defaultItem);

  // Fetch Menu Data
  useEffect(() => {
    setAPILocale(getLocale());
    fetchMenu();
  }, [getLocale()]);

  // Pivot event catcher
  const onDispChange = (item?: PivotItem) => {
    setShow(item.props.itemKey);
    return false;
  };

  // Swipe events
  const leftSwipe = () => {
    switch (showWhat) {
      case 'breakfast':
        setShow('lunch');
        break;
      case 'lunch':
        setShow('dinner');
        break;
      case 'dinner':
      default:
        break;
    }
  };
  const rightSwipe = () => {
    switch (showWhat) {
      case 'dinner':
        setShow('lunch');
        break;
      case 'lunch':
        setShow('breakfast');
        break;
      case 'breakfast':
      default:
        break;
    }
  };

  return (
    <Swipeable onSwipedLeft={leftSwipe} onSwipedRight={rightSwipe}>
      <Pivot
        className={$.menuContainer}
        selectedKey={showWhat}
        onLinkClick={onDispChange}
      >
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
    </Swipeable>
  );
};

export default MenuList;
