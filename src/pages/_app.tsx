import '../styles/globals.css';
import {
  ReactElement, ReactNode, useEffect
} from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App ({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<><Component {...pageProps} /> <Toaster toastOptions={{
    className: '',
    style: {
      backgroundColor: '#1b1c1e',
      color: 'white',
      textAlign: 'center'
    }
  }}/></>);
}
