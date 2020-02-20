import React from 'react';
import {
  Shimmer,
} from 'office-ui-fabric-react';

import $ from './style.scss';

interface MenuData {
  processed?: boolean
  breakfast: string[]
  lunch: string[]
  dinner: string[]
}

interface Props {
  menu: MenuData
  type: 'breakfast' | 'lunch' | 'dinner'
}

const SingleList: React.SFC<Props> = (props: Props) => {
  const { menu, type } = props;

  let menuLists = [];
  if (menu.processed) {
    if (menu[type].length > 0 && menu[type][0].indexOf('==') !== 0) {
      menuLists = [
        ...menuLists,
        <div data-list key={`${type}-${Math.random()}`}>
          {
            menu[type].map((m) => <p key={`${type}-item-${Math.random()}`}>{m}</p>)
          }
        </div>,
      ];
    } else {
      let cacheList = [];
      let cacheLabel = '';
      for (let idx = 0; idx < menu[type].length; idx += 1) {
        const item = menu[type][idx];
        if (item.indexOf('== ') === 0) {
          if (cacheList.length > 0) {
            menuLists = [
              ...menuLists,
              <div data-list key={`${type}-${Math.random()}`}>
                <h6>{cacheLabel}</h6>
                {
                  cacheList.map((m) => <p key={`${type}-item-${Math.random()}`}>{m}</p>)
                }
              </div>,
            ];
            cacheList = [];
          }
          cacheLabel = item.substring(3);
        } else {
          cacheList.push(item);
        }
      }
      if (cacheList.length > 0) {
        menuLists = [
          ...menuLists,
          <div data-list key={`${type}-${Math.random()}`}>
            <h6>{cacheLabel}</h6>
            {
              cacheList.map((m) => <p key={`${type}-item-${Math.random()}`}>{m}</p>)
            }
          </div>,
        ];
      }
    }
  }

  return (
    <div className={$.menuList}>
      {
        menu.processed ? menuLists : (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer width="75%" />
            <Shimmer width="50%" />
          </>
        )
      }
    </div>
  );
};

export default SingleList;
