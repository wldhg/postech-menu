import React from 'react';
import { I18nEnabled } from 'hooks/i18n';
import { APIEnabled } from 'hooks/api';
import { ThemeEnabled } from 'hooks/theme';
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
