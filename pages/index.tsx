import React, { useRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import Cursor from '../components/common/Cursor';
import InformationSection from '../components/portfolio/InformationSection';
import NameAndTitle from '../components/portfolio/NameAndTitle';
import Techs from '../components/portfolio/Techs';
import Interests from '../components/portfolio/Interests';
import Experiences from '../components/portfolio/Experiences';

import useCheckIsDesktop from '../hooks/use-check-is-desktop';

import css from '../styles/index.module.scss';

const aboutMe = `A self-learning, open-minded software engineer. Expertise in JavaScript/TypeScript with over ${
  new Date().getFullYear() - 2018
} years of experience. Software development is truly a craft and I aim to be a better craftsman on each passing day.`;

const Home: NextPage = () => {
  const $mail = useRef<HTMLAnchorElement>(null);
  const $github = useRef<HTMLAnchorElement>(null);
  const $linkedin = useRef<HTMLAnchorElement>(null);

  const $hisoft = useRef<HTMLAnchorElement>(null);
  const $bakco = useRef<HTMLAnchorElement>(null);
  const $codelink = useRef<HTMLAnchorElement>(null);

  const isDesktop = useCheckIsDesktop();

  return (
    <div className={css['scroll-wrapper']}>
      <div className={css['wrapper']}>
        <Head>
          <title>{`<dxanh97 />`}</title>
        </Head>
        <Cursor
          $hoverables={[$mail, $github, $linkedin, $hisoft, $bakco, $codelink]}
        />
        {NameAndTitle({ $mail, $github, $linkedin })}
        <div className={css['information-wrapper']}>
          <div>
            <InformationSection header="About" content={aboutMe} />
            <InformationSection header="Tech" content={Techs} />
            {isDesktop && (
              <InformationSection header="Interests" content={Interests} />
            )}
          </div>
          <div>
            <InformationSection
              header="Experiences"
              content={Experiences({ $hisoft, $bakco, $codelink })}
            />
            {!isDesktop && (
              <InformationSection header="Interests" content={Interests} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
