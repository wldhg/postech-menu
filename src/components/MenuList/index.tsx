import React, { useState, useEffect } from 'react';
import {
  Pivot, PivotItem,
} from 'office-ui-fabric-react';
import moment from 'moment';
import DoubleList from './DoubleList';

import $ from './style.scss';

interface MenuData {
  processed?: boolean
  breakfast: string[]
  lunch: string[]
  dinner: string[]
}

const MenuList: React.SFC = () => {
  // States
  const initialJigokData: MenuData = {
    breakfast: [], lunch: [], dinner: [], processed: false,
  };
  const [jigokData, setJigokData] = useState(initialJigokData);
  const initialRistData: MenuData = {
    breakfast: [], lunch: [], dinner: [], processed: false,
  };
  const [ristData, setRISTData] = useState(initialRistData);

  // Fetch Menu Data
  useEffect(() => {
    const APIFailed: MenuData = {
      breakfast: ['API 요청이 잘못되었습니다.'],
      lunch: ['API 요청이 잘못되었습니다.'],
      dinner: ['API 요청이 잘못되었습니다.'],
      processed: true,
    };
    fetch('https://monet.haze.dog:8282/api/getJigokMenu', {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((data: MenuData) => {
          setJigokData({
            ...data,
            processed: true,
          });
        }).catch(() => {
          setJigokData(APIFailed);
        });
      } else {
        setJigokData(APIFailed);
      }
    }, () => { setJigokData(APIFailed); });
    fetch('https://monet.haze.dog:8282/api/getRISTMenu', {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((data: MenuData) => {
          setRISTData({
            ...data,
            processed: true,
          });
        }).catch(() => {
          setRISTData(APIFailed);
        });
      } else {
        setRISTData(APIFailed);
      }
    }, () => { setRISTData(APIFailed); });
  }, []);

  const hour = moment().hour();
  let showWhat = 'breakfast';
  if (hour >= 15) {
    showWhat = 'dinner';
  } else if (hour >= 11) {
    showWhat = 'lunch';
  }

  return (
    <div className={$.container}>
      <div className={$.modal}>
        <h2 className={$.modalHead}>오늘의 교내 식단</h2>
        <Pivot className={$.pivot} defaultSelectedKey={showWhat}>
          <PivotItem headerText="아침" itemKey="breakfast">
            <DoubleList jigokData={jigokData} ristData={ristData} type="breakfast" />
          </PivotItem>
          <PivotItem headerText="점심" itemKey="lunch">
            <DoubleList jigokData={jigokData} ristData={ristData} type="lunch" />
          </PivotItem>
          <PivotItem headerText="저녁" itemKey="dinner">
            <DoubleList jigokData={jigokData} ristData={ristData} type="dinner" />
          </PivotItem>
        </Pivot>
      </div>
    </div>
  );
};

export default MenuList;
