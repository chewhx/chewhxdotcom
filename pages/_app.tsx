import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.scss';
import { MantineProvider } from '@mantine/core';
import AppContainer from '../layout/AppContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chew Han Xiang - chewhx.com</title>
        <meta name='description' content='Personal site of Chew Han Xiang' />
        <link rel='icon' href='favicon/favicon.ico' />
        <link rel='shortcut icon' href='favicon/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon/favicon-16x16.png'
        />
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
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </MantineProvider>
    </>
  );
}

export default MyApp;
