import React from 'react';
import { I18nEnabled } from '../I18n';
import { APIEnabled } from '../API';
import { ThemeEnabled } from '../Theme';
import { Content, Props } from './Content';

/* eslint-disable react/jsx-props-no-spreading */
const Wrapper: React.FC<Props> = (props: Props) => (
  <I18nEnabled>
    <APIEnabled>
      <ThemeEnabled>
        <Content {...props} />
      </ThemeEnabled>
    </APIEnabled>
  </I18nEnabled>
);

export default Wrapper;
