import React, { useEffect, useState } from 'react';
import {
  MessageBar, MessageBarType,
} from '@fluentui/react';
import useI18n from '../I18n';

import D from './en.d.yml';

const IENotification: React.FC = () => {
  // States
  const { t } = useI18n(D);
  const [showIENoti, setShowIENoti] = useState(false);

  // IE Detection
  useEffect(() => {
    if (
      (window.navigator.userAgent.indexOf('Trident/') >= 0)
      && (window.sessionStorage.getItem('IEHammer') !== 'true')
    ) {
      setShowIENoti(true);
    }
  }, []);
  const closeNoti = () => {
    setShowIENoti(false);
    window.sessionStorage.setItem('IEHammer', 'true');
  };

  return (
    showIENoti && (
      <MessageBar
        messageBarType={MessageBarType.warning}
        isMultiline={false}
        dismissButtonAriaLabel={t('닫기')}
        onDismiss={closeNoti}
      >
        {t('Internet Explorer에서는 화면이 제대로 보이지 않을 수 있습니다.')}
      </MessageBar>
    )
  );
};

export default IENotification;
