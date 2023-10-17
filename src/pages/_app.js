import { useEffect } from 'react';
import Router from 'next/router';


export default function CustomApp({ Component, pageProps }) {
 

  return <Component {...pageProps} />;
}
