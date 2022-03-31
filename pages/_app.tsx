import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '../components/common/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-17C9F9KBGF"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
