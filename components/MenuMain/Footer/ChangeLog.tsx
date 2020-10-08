import React, { useState } from 'react';
import {
  ActivityItem, Dialog, DialogType, DialogFooter, GroupedList, Icon,
  Link, PrimaryButton, SelectionMode, Text, CollapseAllVisibility,
} from '@fluentui/react';
import useI18n from 'hooks/i18n';

import clItem from 'resources/changes.yml';
import $ from './style.scss';
import D from './en.d.yml';

const ChangeLog: React.FC = () => {
  const { t } = useI18n(D);
  const [hideDialog, setHideDialog] = useState(true);
  const [seeMore, setSeeMore] = useState(Object.keys(clItem).length <= 5);

  /* Changelog */
  // Info Dialog Hide
  const closeDialog = () => {
    setHideDialog(true);
    setSeeMore(Object.keys(clItem).length <= 5);
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
        const icon = isPlain ? null : (<Icon iconName={i.icon} />);
        const type = isPlain ? null : i.type;
        const timestamp = isPlain ? null : i.details;
        return (
          <ActivityItem
            className={$.clDetail}
            activityDescription={type}
            comments={content}
            activityIcon={icon}
            // eslint-disable-next-line react/no-array-index-key
            key={`${itemIndex}-${iidx}`}
            timeStamp={timestamp}
            styles={{
              activityText: { color: 'var(--ac-color)', filter: 'brightness(1.2)' },
              commentText: { color: 'var(--fg-color)' },
              timeStamp: { color: 'var(--fg-color)', opacity: 0.65, fontSize: '12px' },
            }}
          />
        );
      })
    ) : null
  );

  // Change Log Items
  const clKeys = Object.keys(clItem).sort().reverse();
  const clValues = clKeys.map((key) => clItem[key]);

  const clFunction = (key, idx) => ({
    count: 1,
    key,
    name: key,
    startIndex: idx,
    isCollapsed: idx !== 0,
  });
  const clGroupsCompact = clKeys.slice(0, 5).map(clFunction);
  const clGroupsExtended = clKeys.map(clFunction);

  // Extended Logs
  const expandList = () => {
    setSeeMore(true);
  };

  return (
    <>
      <Text
        variant="smallPlus"
        className={$.footerButtonlikeAnchor}
        onClick={openDialog}
      >
        {clKeys[0]}
      </Text>
      <Dialog
        hidden={hideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: t('변경 사항'),
          showCloseButton: false,
        }}
        modalProps={{
          className: $.clDialog,
        }}
        maxWidth="90vw"
      >
        <GroupedList
          items={clValues}
          groups={seeMore ? clGroupsExtended : clGroupsCompact}
          onRenderCell={renderCell}
          selectionMode={SelectionMode.none}
          groupProps={{
            collapseAllVisibility: CollapseAllVisibility.hidden,
            headerProps: {
              onRenderTitle: (props) => {
                if (props) {
                  const toggleCollapse = (): void => {
                    // eslint-disable-next-line react/prop-types
                    props.onToggleCollapse!(props.group!);
                  };
                  return (
                    <Link
                      onClick={toggleCollapse}
                      className={$.clVersionTitle}
                    >
                      {/* eslint-disable react/prop-types */ `v ${props.group.key || 'unknown'}`}
                    </Link>
                  );
                }
                return null;
              },
            },
          }}
          compact
        />
        { seeMore || <Link className={$.clSeeMore} onClick={expandList}>See More...</Link> }
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text={t('닫기')} />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ChangeLog;
