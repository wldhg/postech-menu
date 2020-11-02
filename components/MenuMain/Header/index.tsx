import React, { useState } from 'react';
import { MessageBar, MessageBarType, Text } from '@fluentui/react';
import moment from 'moment';
import useI18n from 'hooks/i18n';

import $ from './style.scss';
import D from './en.d.yml';

const Header: React.FC = () => {
  const { t } = useI18n(D);
  const [showNoti, setShowNoti] = useState(true);

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
            {t('현재 복지회 서버가 불안정하여 메뉴가 올바르게 표시되지 않습니다.')}
          </MessageBar>
        )
      }
    </>
  );
};

export default Header;
