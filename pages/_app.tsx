import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#271297',
  background: '#edecf8',
  white: '#ffffff',
  caption: '#9791c2',
};

const Layout = styled.body`
  margin: -10px;
  background: ${(props) => props.theme.background};
  * {
    cursor: none;
    color: ${(props) => props.theme.primary};
    font-family: Lekton;
    font-size: 20px;
    line-height: 24px;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
