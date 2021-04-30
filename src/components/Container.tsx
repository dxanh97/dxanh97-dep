import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #fef8ec;
`;

const Container: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Container;
