import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '../components/common/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-17C9F9KBGF" />
      <Script
        id=""
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17C9F9KBGF', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
