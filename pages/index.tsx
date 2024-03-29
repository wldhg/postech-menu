import React from 'react';
import MenuMain from '../components/MenuMain';
import BlindMain from '../components/BlindMain';

const Index: React.FC = () => {
  console.log(process.env);
  return (
  process.env.NEXT_PUBLIC_OPERATION_MODE === 'ui' ? <MenuMain /> : <BlindMain type="api" />
)};

export default Index;
