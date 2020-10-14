import React, { useEffect, useState } from 'react';
import { Swipeable } from 'react-swipeable';
import { Pivot, PivotItem } from '@fluentui/react';
import HiddenText from 'components/Controls/HiddenText';
import useAPI from 'hooks/api';
import useI18n from 'hooks/i18n';
import ListByMeal from './ListByMeal';

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
        id="pivot"
        className={$.menuContainer}
        selectedKey={showWhat}
        onLinkClick={onDispChange}
      >
        <PivotItem headerText={t('아침')} itemKey="breakfast">
          <HiddenText upperPad={1} lowerPad={2}>{`* ${t('아침')} *`}</HiddenText>
          <ListByMeal type="breakfast" />
        </PivotItem>
        <PivotItem headerText={t('점심')} itemKey="lunch">
          <HiddenText upperPad={1} lowerPad={2}>{`* ${t('점심')} *`}</HiddenText>
          <ListByMeal type="lunch" />
        </PivotItem>
        <PivotItem headerText={t('저녁')} itemKey="dinner">
          <HiddenText upperPad={1} lowerPad={2}>{`* ${t('저녁')} *`}</HiddenText>
          <ListByMeal type="dinner" />
        </PivotItem>
      </Pivot>
    </Swipeable>
  );
};

export default MenuList;
