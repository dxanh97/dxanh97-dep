import type { AppProps } from 'next/app';
import styled from 'styled-components';

import Theme from '../constants/theme';

const Layout = styled.body`
  margin: -10px;
  background: ${Theme.Background};
  * {
    cursor: none;
    color: ${Theme.Primary};
    font-family: Lekton;
    font-size: 20px;
    line-height: 24px;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
