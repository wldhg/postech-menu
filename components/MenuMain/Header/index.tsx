import React, { useState } from 'react';
import { MessageBar, MessageBarType, Text } from '@fluentui/react';
import moment from 'moment';
import useI18n from 'hooks/i18n';

import $ from './style.scss';
import D from './en.d.yml';

const Header: React.FC = () => {
  const { t } = useI18n(D);
  const [showNoti, setShowNoti] = useState(false);

  const closeNoti = () => {
    setShowNoti(false);
  };

  return (
    <>
      <h1>
        <Text variant="xLargePlus" className={$.title}>
          {t('오늘의 교내 식단')}
        </Text>
        <Text variant="xLarge" className={$.date}>
          {moment().format(t('YYYY년 M월 D일'))}
        </Text>
      </h1>
      {
        showNoti && (
          <MessageBar
            className={$.notiBar}
            messageBarType={MessageBarType.warning}
            isMultiline={false}
            dismissButtonAriaLabel={t('닫기')}
            onDismiss={closeNoti}
          >
            {t('현재 RIST 식단 서버 불안정으로 식단 표시가 올바르게 되지 않고 있습니다.')}
          </MessageBar>
        )
      }
    </>
  );
};

export default Header;
