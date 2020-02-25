import React, { useState } from 'react';
import {
  ActionButton, Dialog, DialogType, DialogFooter, PrimaryButton,
} from 'office-ui-fabric-react';
import useI18n from '../../I18n';

import D from './en.d.yml';

/* eslint-disable no-console */
const CaptureMenu: React.SFC = () => {
  const { t } = useI18n(D);
  const [hideDialog, setHideDialog] = useState(true);

  /* Cookie Info */
  // Info Dialog Hide
  const closeDialog = () => {
    setHideDialog(true);
  };
  // Info Dialog Show
  const openDialog = () => {
    setHideDialog(false);
  };

  return (
    <>
      <ActionButton onClick={openDialog}>{t('쿠키 안내')}</ActionButton>
      <Dialog
        hidden={hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: t('쿠키 이용 안내'),
          showCloseButton: false,
        }}
      >
        <p>
          {t('쿠키는 웹 사이트에서 사용자의 브라우저에 데이터를 저장할 수 있게 하는 웹 기술입니다.')}
        </p>
        <p>
          {t('이 사이트는 밝기 모드 설정 저장, 언어 설정 저장만을 위해 쿠키를 사용하며, 저장한 데이터는 마지막 방문 이후 60일간 유지됩니다. 저장된 쿠키는 사용자 브라우저에서만 존재하며, 별도로 서버에 저장하지 않습니다.')}
        </p>
        <p>
          {t('아지래견은 사용자가 이 사이트를 이용하는 것으로 기술한 바 대로의 쿠키 기술 사용에 동의한 것으로 간주합니다.')}
        </p>
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text={t('닫기')} />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CaptureMenu;
