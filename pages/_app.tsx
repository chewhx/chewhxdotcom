import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.scss';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>chewhx.com - Chew Han Xiang - Software Developer</title>
        <meta name='description' content='Personal site of Chew Han Xiang' />
        <link rel='icon' href='favicon/favicon.ico' />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          fontFamily:
            "'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
