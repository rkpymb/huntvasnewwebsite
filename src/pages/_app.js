import { useEffect } from 'react';
import Router from 'next/router';

import 'assets/css/react-slick.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
 

  return <Component {...pageProps} />;
}
