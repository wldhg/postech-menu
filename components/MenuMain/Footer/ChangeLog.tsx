import React, { useState } from 'react';
import {
  ActivityItem, Dialog, DialogType, DialogFooter, GroupedList, PrimaryButton,
  SelectionMode, Text,
} from '@fluentui/react';
import useI18n from '../../I18n';

import $ from './style.scss';

const ChangeLog: React.FC = () => {
  const { t } = useI18n({});
  const [hideDialog, setHideDialog] = useState(true);

  /* Changelog */
  // Info Dialog Hide
  const closeDialog = () => {
    setHideDialog(true);
  };
  // Info Dialog Show
  const openDialog = () => {
    setHideDialog(false);
  };
  // Render Rows
  const renderCell = (nestingDepth?: number, item?, itemIndex?: number) => (
    item && typeof itemIndex === 'number' && itemIndex > -1 ? (
      item.map((i, iidx) => {
        const isPlain = typeof i === 'string' || (i instanceof Array && typeof i[0] === 'string');
        const content = isPlain ? i : i.content;
        const icon = isPlain ? null : i.icon;
        return (
          <ActivityItem
            activityDescription={content}
            activityIcon={icon}
            // eslint-disable-next-line react/no-array-index-key
            key={`${itemIndex}-${iidx}`}
          />
        );
      })
    ) : null
  );

  // Change Log Items
  /* eslint-disable quote-props */
  const clItem = {
    '20201005.0': [
      ['Starts to record it'],

      // TODO Changelog 완성시키고, env 업데이트하고, 버전명도 그날꺼로 바꾸고,
      // TODO 브베계란볶음 같은거 인한스먼트필터 만들어서 변형 검색하도록 하고,
      // TODO 검색 시 쌍따옴표 두개 붙이기
    ],
  };
  const clKeys = Object.keys(clItem).sort().reverse();
  const clValues = clKeys.map((key) => clItem[key]);

  return (
    <>
      <Text
        variant="smallPlus"
        className={$.footerButtonlikeAnchor}
        onClick={openDialog}
      >
        {process.env.NEXT_PUBLIC_ENDPOINT_VERSION}
      </Text>
      <Dialog
        hidden={hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: t('[[]]', {
            ko: ['변경 사항'],
            en: ['Change Logs'],
          }),
          showCloseButton: false,
        }}
        modalProps={{
          className: $.clDialog,
        }}
      >
        <GroupedList
          items={clValues}
          groups={clKeys.map((key, idx) => ({
            count: clItem[key].length,
            key,
            name: `v ${key}`,
            startIndex: idx,
            isCollapsed: idx !== 0,
          }))}
          onRenderCell={renderCell}
          selectionMode={SelectionMode.none}
          compact
        />
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text={t('닫기')} />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ChangeLog;
