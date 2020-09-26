import React from 'react';
import { Icon } from 'office-ui-fabric-react';
import Wrapper from '../Wrapper';

import $ from './style.scss';

const APIDoc: React.FC = () => (
  <Wrapper
    title="API Endpoint"
    className={$.container}
  >
    <h1><Icon iconName="AzureAPIManagement" /></h1>
    <h2>API endpoint is in operation normally.</h2>
    <p>&copy; Avowal.</p>
  </Wrapper>
);

export default APIDoc;
