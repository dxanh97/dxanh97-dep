import React from 'react';

import styled from 'styled-components';
import {
  Container,
  PortfolioHeader,
  Contact,
  AboutMe,
  WorkExperiences,
  TechStacks,
} from '@dxanh97/components';
import '../styles.css';

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 8px;
  background: #fef8ec;
  text-transform: lowercase;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div.header {
    width: 100%;
  }
  & > div.contact {
    width: 100%;
  }
  & > div.about-me {
    width: 100%;
  }
  & > div.work-experiences {
    width: 60%;
  }
  & > div.additional {
    width: 40%;
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <Wrapper>
        <div className="header">
          <PortfolioHeader />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div className="about-me">
          <AboutMe />
        </div>
        <div className="work-experiences">
          <WorkExperiences />
        </div>
        <div className="additional">
          <TechStacks />
        </div>
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
