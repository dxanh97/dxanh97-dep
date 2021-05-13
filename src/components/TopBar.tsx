import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.topBar};
  height: 36px;
`;

const TopBar: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default TopBar;
