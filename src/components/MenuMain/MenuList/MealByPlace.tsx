import React from 'react';
import { Shimmer, Text } from 'office-ui-fabric-react';
import { MealType, MealPlaces, useAPI } from '../../API';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

interface Props {
  type: MealType
  place: MealPlaces
};

const MealByPlace: React.SFC<Props> = (props: Props) => {
  const { getMenu, isMenuLoaded } = useAPI();
  const { t } = useI18n(D);
  const { place, type } = props;

  const menu = getMenu(place, type);
  let menuLists = [<div><p>{t('DOM 생성 중 오류가 발생했습니다.')}</p></div>];
  if (menu) {
    if (menu instanceof Array) {
      menuLists = [
        <div data-list key={`${place}-${type}-${Math.random()}`}>
          {
            menu.map((m) => (
              <p key={`${place}-${type}-i${Math.random()}`}>
                <Text variant="medium">{m}</Text>
              </p>
            ))
          }
        </div>,
      ];
    } else {
      const menuTitles = Object.keys(menu);
      menuLists = [];
      for (let idx = 0; idx < menuTitles.length; idx += 1) {
        menuLists.push(
          <div data-list key={`${place}-${type}-${Math.random()}`}>
            <h4>
              <Text variant="medium" className={$.subTitle}>{menuTitles[idx]}</Text>
            </h4>
            {
              menu[menuTitles[idx]].map((m) => (
                <p key={`${place}-${type}-i${Math.random()}`}>
                  <Text variant="medium">{m}</Text>
                </p>
              ))
            }
          </div>,
        );
      }
    }
  }

  return (
    <div className={$.menuList}>
      {
        isMenuLoaded(place) ? menuLists : (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer width="95%" />
            <Shimmer width="75%" />
            <Shimmer width="40%" />
          </>
        )
      }
    </div>
  );
};

export default MealByPlace;
