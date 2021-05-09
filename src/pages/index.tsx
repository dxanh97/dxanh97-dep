import React from 'react';

import styled from 'styled-components';
import {
  ContactAndAbout,
  Container,
  PortfolioHeader,
  WorkExperiences,
} from '@dxanh97/components';
import '../styles.css';

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 8px;
  background: #fef8ec;
  /* text-transform: lowercase; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div.header {
    width: 100%;
  }
  & > div.work-experiences {
    width: 60%;
    padding: 16px;
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <Wrapper>
        <div className="header">
          <PortfolioHeader />
        </div>
        <ContactAndAbout />
        <div className="work-experiences">
          <WorkExperiences />
        </div>
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
