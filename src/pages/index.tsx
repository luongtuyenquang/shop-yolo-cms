import Head from 'next/head';
import { Typography } from '@mui/material';

export default function Home() {
  // remove MUI and add TailwindCSS

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>

      <Typography>Hello world</Typography>
    </>
  );
}
