import React, { useRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import Cursor from '../components/Cursor';
import TopSection from '../components/TopSection';
import TechSection from '../components/TechSection';
import InterestSection from '../components/InterestSection';
import ExperienceSection from '../components/ExperienceSection';

import css from '../styles/index.module.scss';

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
    <div className={css['scroll-wrapper']}>
      <div className={css['wrapper']}>
        <Head>
          <title>{`<dxanh97 />`}</title>
        </Head>
        <Cursor
          $hoverables={[$mail, $github, $linkedin, $hisoft, $bakco, $codelink]}
        />
        <div className={css['top-section']}>
          {TopSection({ $mail, $github, $linkedin })}
        </div>
        <div className={css['information-wrapper']}>
          <div>
            <div className={css['information-section']}>
              <h3>About</h3>
              <span className={css['justify']}>
                {aboutMe(new Date().getFullYear() - 2018)}
              </span>
            </div>
            <div className={css['information-section']}>
              <h3>Tech</h3>
              {TechSection}
            </div>

            <div className={css['information-section']}>
              <h3>Interests</h3>
              {InterestSection}
            </div>
          </div>
          <div>
            <div className={css['information-section']}>
              <h3>Experiences</h3>
              {ExperienceSection({ $hisoft, $bakco, $codelink })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
