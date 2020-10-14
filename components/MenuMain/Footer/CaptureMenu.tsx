import React, { useState } from 'react';
import {
  ActionButton, Dialog, DialogType, DialogFooter, PrimaryButton,
  Spinner, SpinnerSize,
} from '@fluentui/react';
import download from 'downloadjs';
import moment from 'moment';
import useI18n from 'hooks/i18n';
import useTheme from 'hooks/theme';

import $ from './style.scss';
import D from './en.d.yml';

/* eslint-disable no-console */
const CaptureMenu: React.FC = () => {
  const { t } = useI18n(D);
  const { getTheme } = useTheme();
  const [hideDialog, setHideDialog] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);

  /* Screen Capture */
  // Failed Dialog Hide
  const closeDialog = () => {
    setHideDialog(true);
    setIsCapturing(false);
  };
  // Capture Function
  const captureMenu = () => {
    setIsCapturing(true);
    if (document && window) {
      import('html2canvas').then((h2c) => {
        const doSecondaryTry = () => {
          h2c.default(document.querySelector('main'), {
            backgroundColor: getTheme() === 'light' ? '#ffffff' : '#1a1918',
            canvas: null,
            cache: null,
            allowTaint: true,
          }).then((canvas) => {
            const dateString = moment().format('YYYYMMDD');
            const selectedMealButton: HTMLButtonElement = document.querySelector(
              '.ms-Pivot-link.is-selected',
            );
            const selectedMealType = selectedMealButton.dataset.content;
            download(
              canvas.toDataURL('image/png'),
              `${t('교내식단')}-${dateString}-${selectedMealType}.png`,
              'image/png',
            );
            setTimeout(() => {
              setIsCapturing(false);
            }, 100);
          }).catch((err) => {
            setHideDialog(false);
            console.error(err);
          });
        };
        doSecondaryTry();
      }).catch((err) => {
        setHideDialog(false);
        console.error(err);
      });
    } else {
      setHideDialog(false);
    }
  };

  return (
    <>
      <ActionButton onClick={captureMenu} disabled={isCapturing}>
        {t('메뉴 캡처')}
        <Spinner
          className={`${$.actionSpinner}${isCapturing ? ` ${$.activeSpinner}` : ''}`}
          size={SpinnerSize.xSmall}
        />
      </ActionButton>
      <Dialog
        hidden={hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: t('캡처 실패'),
          subText: t('메뉴 DOM을 얻을 수 없었습니다. 잠시 후 다시 시도해보세요.'),
          showCloseButton: false,
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text={t('닫기')} />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CaptureMenu;
