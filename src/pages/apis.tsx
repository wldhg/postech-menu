import React from 'react';
import Wrapper from '../components/Wrapper';
import APIDoc from '../components/APIDoc';

const API: React.SFC = () => (
  <Wrapper
    title="API"
    description="오늘의 메뉴 API 문서"
  >
    <APIDoc />
  </Wrapper>
);

export default API;
