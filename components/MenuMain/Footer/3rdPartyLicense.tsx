import React, { useState } from 'react';
import {
  ActionButton, Dialog, DialogType, DialogFooter, PrimaryButton,
} from '@fluentui/react';

import $ from './style.scss';

/* eslint-disable no-console */
const ThirdPartyLicense: React.FC = () => {
  const [hideDialog, setHideDialog] = useState(true);

  /* 3rd Party License Info */
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
      <ActionButton onClick={openDialog}>LICENSE</ActionButton>
      <Dialog
        hidden={hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'License Notice',
          showCloseButton: false,
        }}
        modalProps={{
          className: $.oslDialog,
        }}
      >
        <p className={$.thirdthanks}>
          Today's POSTECH Menu used below assets/softwares. Thank you.
        </p>
        <p>
          &ldquo;Google Translate&rdquo; icon in this page was made by&nbsp;
          <a href="https://www.flaticon.com/authors/freepik" target="_blank" title="Freepik">Freepik</a>
          &nbsp;from&nbsp;
          <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a>
          .
        </p>
        <p>
          Look <a href="/oss-notice.txt" target="_blank">this file</a> for used open source softwares.
        </p>
        <p>
        &ldquo;Microsoft Fabric UI assets&rdquo; are used under <a href="https://static2.sharepointonline.com/files/fabric/assets/microsoft_fabric_assets_license_agreement_nov_2019.pdf" target="_blank">this license</a>.
        </p>
        <p>
          &ldquo;Noto Sans KR&rdquo; font family is used in this project. See <a href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL" target="_blank">here</a> for the OFL license.
        </p>
        <p>
          This site is hosted by <a href="https://vercel.com/" target="_blank">Vercel Inc.</a>, and the source code is hosted by <a href="https://github.com/" target="_blank">GitHub, Inc.</a>
        </p>
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text="Close" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ThirdPartyLicense;
