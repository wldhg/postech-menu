import React from 'react';
import { Text } from '@fluentui/react';

import $ from './HiddenText.scss';

type Props = {
  children?: any;
  upperPad?: number;
  lowerPad?: number;
};

const HiddenText: React.FC<Props> = (props: Props) => {
  const { children, upperPad, lowerPad } = props;

  const upperBRs = [];
  const lowerBRs = [];

  for (let i = 0; i < upperPad; i += 1) {
    upperBRs.push(<br />);
  }
  for (let i = 0; i < lowerPad; i += 1) {
    lowerBRs.push(<br />);
  }

  return (
    <Text className={$.hiddenDragable}>
      {upperBRs}
      {children}
      {lowerBRs}
    </Text>
  );
};

HiddenText.defaultProps = {
  children: null,
  upperPad: 0,
  lowerPad: 0,
};

export default HiddenText;
