import React, { useEffect } from 'react';
import Head from 'next/head';
import useTheme from 'hooks/theme';
import useI18n from 'hooks/i18n';
import IENotification from './IENotification';

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
const WrapperContent: React.FC<Props> = (props: Props) => {
  // States
  const { t, setLocale } = useI18n(D);
  const { setTheme } = useTheme();

  // Props
  const {
    children, title, main, description, image, className,
  } = props;

  // Determine meta information
  const realTitle = main ? t('오늘의 교내 식단') : `${title} - ${t('오늘의 교내 식단')}`;
  const metaDescription = description || t('오늘의 포스텍 교내 식단을 확인해보세요.');
  const metaImage = image || '/banner.png';

  // Display Mode
  const dispModeInit = `
    if (
      ((window.localStorage.getItem('NightBoy') === 'true') ${/* Manually Set To Dark */''}
      || (window.matchMedia('(prefers-color-scheme: dark)').matches)) ${/* Dark By Default */''}
      && !(window.localStorage.getItem('NightBoy') === 'false') ${/* Manually Set To Not Dark */''}
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
      ((window.localStorage.getItem('EnglishGirl') === 'true') ${/* Manually Set To English */''}
      || (navigator.language.indexOf('ko') === -1)) ${/* English By Default */''}
      && !(window.localStorage.getItem('EnglishGirl') === 'false') ${/* Manually Set To Not English */''}
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

  // Keywords
  const metaKeywords = [
    '학식', 'RIST식당', '리스트식당', '리스트', '포항공대', '공대', '포스텍', 'RIST', 'POSTECH',
    'Student Cafeteria', 'Cafeteria', 'Menu', 'Campus Menu',
  ].join(', ');

  // Render
  return (
    <>
      <Head>
        {/* Scripts */}
        <script dangerouslySetInnerHTML={{ __html: dispModeInit }} />
        <script dangerouslySetInnerHTML={{ __html: localeInit }} />

        {/* Meta Tags */}
        <meta name="theme-color" content="#6666cc" />
        { main || <meta name="robots" content="none" /> }
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="viewport" content="width=390, user-scalable=no" />
        <meta property="og:title" content={realTitle} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <title>{realTitle}</title>

        {/* Styles */}
        <link href="/favicon.ico" rel="shortcut icon" />
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
