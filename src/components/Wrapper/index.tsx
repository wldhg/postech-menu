import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Customizations, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { monetDark, monetLight } from './theme';

import $ from './style.scss';

// React Wrapper
interface Props {
  title?: string
  description?: string
  main?: boolean
  image?: string
  className?: string
  children: React.ReactElement | React.ReactElement[]
};

const Wrapper: React.SFC<Props> = (props: Props) => {
  const {
    children, title, main, description, image, className,
  } = props;
  const [showIENoti, setShowIENoti] = useState(false);

  // Determine meta information
  const realTitle = main ? '오늘의 메뉴' : `${title} - 오늘의 메뉴`;
  const metaDescription = description || '당신 꿀벌은 밥을 잘 먹습니까?';
  const metaImage = image || '/images/buzz_fly.gif';

  // Display Mode
  useEffect(() => {
    if (document.documentElement.dataset?.theme === 'dark') {
      Customizations.applySettings({ theme: monetDark });
    } else {
      Customizations.applySettings({ theme: monetLight });
    }
    document.documentElement.classList.add($.loaded);
  }, []);
  const dispModeInit = `
    if (
      ((document.cookie.indexOf('NightBoy=true') >= 0) // Manually Set To Dark
      || (window.matchMedia('(prefers-color-scheme: dark)').matches)) // Dark By Default
      && !(document.cookie.indexOf('NightBoy=false') >= 0) // Manually Set To Not Dark
    ) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
  `;

  // IE Detection
  useEffect(() => {
    if (
      (window.navigator.userAgent.indexOf('Trident/') >= 0)
      && (document.cookie.indexOf('IEGirl=true') < 0)
    ) {
      setShowIENoti(true);
    }
  }, []);
  const closeNoti = () => {
    setShowIENoti(false);
    document.cookie = 'IEGirl=true';
  };

  // Render
  return (
    <>
      <Head>
        {/* Display Mode Script */}
        <script dangerouslySetInnerHTML={{ __html: dispModeInit }} />

        {/* Meta Tags */}
        <meta name="theme-color" content="#ffc206" />
        <meta name="robots" content="noimageindex" />
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=360, user-scalable=no" />
        <meta property="og:title" content={realTitle} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <title>{realTitle}</title>

        {/* Styles */}
        <link href="favicon.ico" rel="shortcut icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
          rel="stylesheet"
        />

      </Head>
      {
        showIENoti && (
          <MessageBar
            messageBarType={MessageBarType.warning}
            isMultiline={false}
            dismissButtonAriaLabel="닫기"
            overflowButtonAriaLabel="더 알아보기"
            onDismiss={closeNoti}
          >
            Internet Explorer에서는 화면이 제대로 보이지 않을 수 있습니다.
          </MessageBar>
        )
      }
      <div className={className}>{children}</div>
      <div id={$.blocker} />
    </>
  );
};

export default Wrapper;
