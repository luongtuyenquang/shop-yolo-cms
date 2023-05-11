import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
import AppContainer from '@/components/containers/AppContainer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="shop yolo" />
      </Head>

      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}
