import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/css/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="shop yolo" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
