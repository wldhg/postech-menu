import React from 'react';
import MenuMain from '../components/MenuMain';
import APIMain from '../components/APIMain';

const Index: React.FC = () => (
  process.env.NEXT_PUBLIC_OPERATION_MODE === 'ui' ? <MenuMain /> : <APIMain />
);

export default Index;
