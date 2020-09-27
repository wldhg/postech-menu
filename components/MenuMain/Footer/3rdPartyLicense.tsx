import React, { useState } from 'react';
import {
  ActionButton, Dialog, DialogType, DialogFooter, PrimaryButton,
} from 'office-ui-fabric-react';

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
      <ActionButton onClick={openDialog}>OSL Notice</ActionButton>
      <Dialog
        hidden={hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Open Source License Notice',
          showCloseButton: false,
        }}
        modalProps={{
          className: $.oslDialog,
        }}
      >
        <p>
          &ldquo;Google Translate&rdquo; icon in this page was made by&nbsp;
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
          &nbsp;from&nbsp;
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          .
        </p>
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text="Close" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ThirdPartyLicense;
