import React from 'react';

import styled from 'styled-components';
import {
  ContactAndAbout,
  Container,
  PortfolioHeader,
} from '@dxanh97/components';
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
        <ContactAndAbout />
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
