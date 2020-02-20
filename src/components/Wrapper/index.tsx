import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { initializeIcons } from '@uifabric/icons';

import './style.scss';

// Fabric UI
initializeIcons(undefined, { disableWarnings: true });
import('office-ui-fabric-react/lib/Styling').then((sty) => {
  sty.loadTheme({
    palette: {
      themePrimary: 'var(--monet)',
      themeDarker: 'var(--monet)',
      themeDark: 'var(--monet)',
      themeDarkAlt: 'var(--monet)',
      themeLight: 'var(--monet)',
      themeLighter: 'var(--monet)',
      themeLighterAlt: 'var(--monet)',
    },
  });
}).catch(() => {});

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
  const { pathname } = useRouter();

  // Determine meta information
  const realTitle = main ? '오늘의 메뉴' : `${title} - 오늘의 메뉴`;
  const metaDescription = description || '당신 꿀벌은 밥을 잘 먹습니까?';
  const metaURL = `https://monet.waai.us:8282${pathname}`;
  const metaImage = image || '/images/buzz_fly.gif';

  // Render
  return (
    <div className={className}>
      <Head>

        {/* Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noimageindex" />
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=320, user-scalable=no" />
        <meta property="og:title" content={realTitle} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <base href="https://monet.waai.us:8282/" />
        <title>{realTitle}</title>

        {/* Styles */}
        <link href="favicon.ico" rel="shortcut icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean"
          rel="stylesheet"
        />

      </Head>

      {/* Real Body */}
      {children}
    </div>
  );
};

export default Wrapper;
