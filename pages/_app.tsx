import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
import AppContainer from '../layout/AppContainer';
import { ThemeProvider } from '../components/ui/theme-provider';

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
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
