import React, { useState } from 'react';
import { Text, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import useI18n from '../../I18n';

import $ from './style.scss';
import D from './en.d.yml';

const Header: React.SFC = () => {
  const { t, getLocale } = useI18n(D);
  const [showEngNoti, setShowEngNoti] = useState(true);

  // English Notification Closer
  const closeEngNoti = () => {
    setShowEngNoti(false);
  };

  return (
    <>
      <h1>
        <Text variant="xLargePlus" className={$.title}>
          {t('오늘의 교내 식단')}
        </Text>
      </h1>
      {
        getLocale() === 'en' && showEngNoti && (
          <MessageBar
            messageBarType={MessageBarType.warning}
            dismissButtonAriaLabel="Close"
            onDismiss={closeEngNoti}
            className={$.engNoti}
          >
            English is not supported on RIST Cafeteria menu for now.
          </MessageBar>
        )
      }
    </>
  );
};

export default Header;
