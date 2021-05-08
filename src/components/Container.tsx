import React from 'react';
import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';

const StyledDiv = styled.div`
  margin: auto;
  margin-top: 20px;
  ${down('md')} {
    width: calc(100% - 2em);
    margin-top: 1em;
  }
  ${up('md')} {
    width: 723px;
  }
  ${up('lg')} {
    width: 933px;
  }
  ${up('xl')} {
    width: 1127px;
  }
`;

const Container: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Container;
