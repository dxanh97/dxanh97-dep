import React, { useRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import styled from 'styled-components';

import Cursor from '../components/common/Cursor';

import InformationSection from '../components/portfolio/InformationSection';
import NameAndTitle from '../components/portfolio/NameAndTitle';
import Techs from '../components/portfolio/Techs';
import Interests from '../components/portfolio/Interests';
import Experiences from '../components/portfolio/Experiences';

const ScrollWrapper = styled.div`
  height: 100vh;
  overflow: auto;
`;
const Wrapper = styled.div`
  margin: auto;
  padding-top: 60px;
  padding-bottom: 100px;
  @media (min-width: 1000px) {
    max-width: 1000px;
  }
`;
const InformationWrapper = styled.div`
  display: flex;
  & > div:first-child {
    width: 35%;
    padding-right: 16px;
  }
  & > div:last-child {
    flex: 1;
    padding-left: 16px;
  }
`;

const aboutMe = (years: number) => {
  return `A self-learning, open-minded software engineer. Expertise in JavaScript/TypeScript with over ${years} years of experience. Software development is truly a craft and I aim to be a better craftsman on each passing day.`;
};

const Home: NextPage = () => {
  const $mail = useRef<HTMLAnchorElement>(null);
  const $github = useRef<HTMLAnchorElement>(null);
  const $linkedin = useRef<HTMLAnchorElement>(null);

  const $hisoft = useRef<HTMLAnchorElement>(null);
  const $bakco = useRef<HTMLAnchorElement>(null);
  const $codelink = useRef<HTMLAnchorElement>(null);

  return (
    <ScrollWrapper>
      <Wrapper>
        <Head>
          <title>{`<dxanh97 />`}</title>
        </Head>
        <Cursor
          $hoverables={[$mail, $github, $linkedin, $hisoft, $bakco, $codelink]}
        />
        {NameAndTitle({ $mail, $github, $linkedin })}
        <InformationWrapper>
          <div>
            <InformationSection
              header="About"
              content={aboutMe(new Date().getFullYear() - 2018)}
            />
            <InformationSection header="Tech" content={Techs} />
            <InformationSection header="Interests" content={Interests} />
          </div>
          <div>
            <InformationSection
              header="Experiences"
              content={Experiences({ $hisoft, $bakco, $codelink })}
            />
          </div>
        </InformationWrapper>
      </Wrapper>
    </ScrollWrapper>
  );
};

export default Home;
