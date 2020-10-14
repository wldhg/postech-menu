import React, { useState } from 'react';
import { ActionButton, Spinner, SpinnerSize } from '@fluentui/react';
import useI18n from 'hooks/i18n';

import D from './en.d.yml';
import $ from './style.scss';

type CopyStatus = 'onprocessing' | 'idle';

const CopyText: React.FC = () => {
  const { t } = useI18n(D);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  const setIdle = () => {
    setTimeout(() => {
      setCopyStatus('idle');
    }, 300);
  };

  const selectAndCopyText = () => {
    setCopyStatus('onprocessing');

    try {
      // Get values
      let str = '';
      const rangeHeader = document.createRange();
      rangeHeader.selectNodeContents(document.querySelector('main > h1'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(rangeHeader);
      str = window.getSelection().toString();
      const rangeContent = document.createRange();
      rangeContent.selectNodeContents(document.querySelector('#pivot [role="tabpanel"]'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(rangeContent);
      str = `${str}\n${window.getSelection().toString()}`;
      const rangeFooter = document.createRange();
      rangeFooter.selectNodeContents(document.querySelector('footer'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(rangeFooter);
      str = `${str}\n${window.getSelection().toString()}`;
      window.getSelection().removeAllRanges();

      // Do copy
      if (navigator.clipboard) {
        // eslint-disable-next-line no-console
        navigator.clipboard.writeText(str).then(() => {
          setIdle();
        }, (error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          setIdle();
        });
      } else {
        const copyarea = document.getElementById('copyarea') as HTMLTextAreaElement;
        copyarea.value = str;
        copyarea.focus();
        copyarea.select();

        try {
          document.execCommand('copy');
          setIdle();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
          setIdle();
        } finally {
          if (document.activeElement) {
            (document.activeElement as HTMLElement).blur();
          }
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setIdle();
    }
  };

  return (
    <>
      <textarea id="copyarea" className={$.hiddenCopyArea} />
      <ActionButton
        onClick={selectAndCopyText}
        title={t('텍스트 복사')}
        disabled={copyStatus !== 'idle'}
      >
        {t('텍스트 복사')}
        <Spinner
          className={`${$.actionSpinner}${copyStatus === 'idle' ? '' : ` ${$.activeSpinner}`}`}
          size={SpinnerSize.xSmall}
        />
      </ActionButton>
    </>
  );
};

export default CopyText;
