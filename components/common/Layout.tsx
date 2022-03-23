import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: -10px;
  background: ${(props) => props.theme.background};
  * {
    cursor: none;
    color: ${(props) => props.theme.primary};
  }
`;

const Layout: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
