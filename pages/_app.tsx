import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

import ReduxProvider from '../app/model/provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cinemania | Dive Into Movie Wonderland</title>
        <link rel="icon" href="/pop-corn.svg" />
      </Head>
      <main className={poppins.className}>
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
      </main>
    </>
  );
}
