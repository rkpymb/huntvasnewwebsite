/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Head from 'next/head'
import Script from 'next/script'
export default function Layout({ children }) {
  return (
    <React.Fragment>
      
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4RD79SV28G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4RD79SV28G');
        `}
      </Script>
      <Footer />
    </React.Fragment>
  );
}
