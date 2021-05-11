import React from 'react';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import {
  Container,
  PortfolioHeader,
  Contact,
  AboutMe,
  WorkExperiences,
  TechStacks,
  Hobbies,
} from '@dxanh97/components';

import '../styles.css';

const Wrapper = styled.div`
  margin: 32px 0;
  ${down('md')} {
    margin: 16px 0;
  }
  border: 1px solid;
  border-radius: 8px;
  background: #fef8ec;
  text-transform: lowercase;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div.header {
    width: 100%;
    margin-bottom: 16px;
  }
  & > div.contact {
    width: 100%;
  }
  & > div.about-me {
    width: 100%;
  }
  & > div.work-experiences {
    width: 60%;
    ${down('sm')} {
      width: 100%;
    }
  }
  & > div.additional {
    width: 40%;
    ${down('sm')} {
      width: 100%;
    }
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'<dxanh97 />'}</title>
        <link
          rel="icon"
          type="image/png"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/rose_1f339.png"
        ></link>
      </Helmet>
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
          <Hobbies />
        </div>
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
