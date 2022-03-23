import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/common/Layout';

const theme = {
  primary: '#271297',
  background: '#edecf8',
  white: '#ffffff',
  caption: '#9791c2',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
