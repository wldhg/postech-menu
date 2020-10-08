import React from 'react';
import { Icon, Text } from '@fluentui/react';
import Wrapper from '../Wrapper';

import $ from './style.scss';

type BlindAccess = 'api' | '404';

type Props = {
  type?: BlindAccess;
};

const BlindMain: React.FC<Props> = (props: Props) => {
  const { type } = props;

  /* eslint-disable quote-props */

  const title = {
    'api': 'API Endpoint',
    '404': 'N0ㅜ FoU|\\|ㅣ)',
  };

  const icon = {
    'api': 'AzureAPIManagement',
    '404': 'Sad',
  };

  const description = {
    'api': 'API endpoint is in operation normally.',
    '404': 'The URL you\'ve entered is not found.',
  };

  const goFront = () => {
    window.location.replace('/');
  };

  return (
    <Wrapper
      title={title[type]}
      className={$.container}
    >
      <h1><Icon iconName={icon[type]} /></h1>
      <h2>{description[type]}</h2>
      {
        type === '404' && (
          <p>
            <Text
              className={$.clicker}
              onClick={goFront}
              variant="mediumPlus"
              tabIndex={0}
            >
              Press here to go to the front.
            </Text>
          </p>
        )
      }
      <p>&copy; Avowal.</p>
    </Wrapper>
  );
};

BlindMain.defaultProps = {
  type: '404',
};

export default BlindMain;
