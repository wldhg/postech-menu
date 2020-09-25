import React, { useEffect } from 'react';
import Head from 'next/head';
import IENotification from './IENotification';
import useTheme from '../Theme';
import useI18n from '../I18n';

import $ from './style.scss';
import D from './en.d.yml';

export interface Props {
  title?: string;
  description?: string;
  main?: boolean;
  image?: string;
  className?: string;
  children: React.ReactElement | React.ReactElement[];
};

// React Wrapper
/* eslint-disable react-hooks/exhaustive-deps */
const WrapperContent: React.SFC<Props> = (props: Props) => {
  // States
  const { t, setLocale } = useI18n(D);
  const { setTheme } = useTheme();

  // Props
  const {
    children, title, main, description, image, className,
  } = props;

  // Determine meta information
  const realTitle = main ? t('오늘의 교내 식단') : `${title} - ${t('오늘의 교내 식단')}`;
  const metaDescription = description || t('당신의 꿀벌은 밥을 잘 먹습니까?');
  const metaImage = image || '/images/buzz_fly.gif';

  // Display Mode
  const dispModeInit = `
    if (
      ((document.cookie.indexOf('NightBoy=true') >= 0) ${/* Manually Set To Dark */''}
      || (window.matchMedia('(prefers-color-scheme: dark)').matches)) ${/* Dark By Default */''}
      && !(document.cookie.indexOf('NightBoy=false') >= 0) ${/* Manually Set To Not Dark */''}
    ) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
  `;
  useEffect(() => {
    if (document.documentElement.dataset?.theme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    document.documentElement.classList.add($.loaded);
  }, [/* Run Only Once */]);

  // Locale
  const localeInit = `
    if (
      ((document.cookie.indexOf('EnglishFlag=true') >= 0) ${/* Manually Set To English */''}
      || (navigator.language.indexOf('ko') === -1)) ${/* English By Default */''}
      && !(document.cookie.indexOf('EnglishFlag=false') >= 0) ${/* Manually Set To Not English */''}
    ) {
      document.documentElement.lang = 'en';
    } else {
      document.documentElement.lang = 'ko';
    }
  `;
  useEffect(() => {
    if (document.documentElement.lang === 'ko') {
      setLocale('ko');
    } else {
      setLocale('en');
    }
  }, [/* Run Only Once */]);

  // Render
  return (
    <>
      <Head>
        {/* Scripts */}
        <script dangerouslySetInnerHTML={{ __html: dispModeInit }} />
        <script dangerouslySetInnerHTML={{ __html: localeInit }} />

        {/* Meta Tags */}
        <meta name="theme-color" content="#ffc206" />
        <meta name="robots" content="noimageindex" />
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=390, user-scalable=no" />
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
      <IENotification />
      <div className={className}>{children}</div>
    </>
  );
};

export { WrapperContent as Content };
