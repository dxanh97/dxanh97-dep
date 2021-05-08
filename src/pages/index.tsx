import React from 'react';

import styled from 'styled-components';
import { Container, PortfolioHeader } from '@dxanh97/components';
import '../styles.css';

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 8px;
  background: #fef8ec;
  /* text-transform: lowercase; */
`;

const IndexPage = () => {
  return (
    <Container>
      <Wrapper>
      <PortfolioHeader />
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
