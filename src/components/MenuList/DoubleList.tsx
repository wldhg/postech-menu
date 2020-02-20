import React from 'react';
import MenuList from './SingleList';

import $ from './style.scss';

interface MenuData {
  processed?: boolean
  breakfast: string[]
  lunch: string[]
  dinner: string[]
}

interface Props {
  jigokData: MenuData
  ristData: MenuData
  type: 'breakfast' | 'lunch' | 'dinner'
}

const DoubleList: React.SFC<Props> = (props: Props) => {
  const {
    jigokData, ristData, type,
  } = props;

  return (
    <div className={$.menuContainer}>
      <div>
        <h4>학생 식당</h4>
        <MenuList menu={jigokData} type={type} />
      </div>
      <div>
        <h4>RIST 식당</h4>
        <MenuList menu={ristData} type={type} />
      </div>
    </div>
  );
};

export default DoubleList;
