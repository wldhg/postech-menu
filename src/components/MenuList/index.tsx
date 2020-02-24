import React, { useState, useEffect } from 'react';
import {
  Pivot, PivotItem, ActionButton, Customizations,
} from 'office-ui-fabric-react';
import DoubleList from './DoubleList';
import { monetDark, monetLight } from '../Wrapper/theme';

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
  const [dispModeTogglerText, setDispModeTogglerText] = useState('밝기 모드 변경');

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

  // Set default pivot item by time
  const hour = (new Date()).getHours();
  let showWhat = 'breakfast';
  if (hour >= 14) {
    showWhat = 'dinner';
  } else if (hour >= 10) {
    showWhat = 'lunch';
  }

  // Set toggle mode change button
  const setNightBoy = (data?: boolean) => {
    if (typeof data !== 'boolean') {
      document.cookie = 'NightBoy=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } else {
      document.cookie = `NightBoy=${data.toString()};expires=${
        (new Date(Date.now() + 5184000)).toUTCString()
      };`;
    }
  };
  const toggleDispMode = () => {
    if (document.documentElement.dataset?.theme === 'dark') {
      Customizations.applySettings({ theme: monetLight });
      document.documentElement.dataset.theme = 'light';
      setDispModeTogglerText('어둡게 보기');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy(false);
      } else {
        setNightBoy();
      }
    } else {
      Customizations.applySettings({ theme: monetDark });
      document.documentElement.dataset.theme = 'dark';
      setDispModeTogglerText('밝게 보기');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setNightBoy();
      } else {
        setNightBoy(true);
      }
    }
  };
  useEffect(() => {
    if (document.documentElement.dataset?.theme === 'dark') {
      setDispModeTogglerText('밝게 보기');
    } else {
      setDispModeTogglerText('어둡게 보기');
    }
  }, []);

  return (
    <div className={$.container}>
      <main>
        <h1>오늘의 교내 식단</h1>
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
      </main>
      <footer>
        <div>
          <ActionButton disabled>API 문서</ActionButton>
          <ActionButton onClick={toggleDispMode}>{dispModeTogglerText}</ActionButton>
        </div>
        <p>
          데이터: 포스텍 복지회, 신세계푸드.
          <br />
          시스템: 아지래견.
        </p>
      </footer>
    </div>
  );
};

export default MenuList;
