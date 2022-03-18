import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import {
  SiAmazonaws,
  SiEslint,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrettier,
  SiReact,
  SiRedux,
  SiServerless,
  SiTypescript,
  SiVim,
} from 'react-icons/si';
import {
  RiFootballLine,
  RiBilliardsLine,
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
} from 'react-icons/ri';

import css from '../styles/index.module.scss';

const contactList = [
  { href: 'mailto:dxanh97@gmail.com', icon: <FiMail /> },
  { href: 'https://github.com/dxanh97', icon: <FiGithub /> },
  { href: 'https://www.linkedin.com/in/dxanh97', icon: <FiLinkedin /> },
];

const topSectionNode = (
  <>
    <h1 className={css['header']}>
      Đặng
      <br />
      Xuân
      <br />
      Anh
    </h1>
    <div className={css['job-title']}>
      <span>Software Engineer</span>
    </div>
    <div className={css['contact-wrapper']}>
      {contactList.map((contact) => (
        <a
          key={contact.href}
          target="_blank"
          rel="noreferrer"
          href={contact.href}
        >
          {contact.icon}
        </a>
      ))}
    </div>
  </>
);

const techList = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'NextJS', icon: <SiNextdotjs /> },
  { name: 'NodeJS', icon: <SiNodedotjs /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'AWS', icon: <SiAmazonaws /> },
  { name: 'Serverless', icon: <SiServerless /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'ESLint', icon: <SiEslint /> },
  { name: 'Prettier', icon: <SiPrettier /> },
  { name: 'Vim', icon: <SiVim /> },
];

const techNode = (
  <div className={css['tech-wrapper']}>
    {techList.map((tech) => (
      <div key={tech.name} className={css['tag']}>
        <div>
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      </div>
    ))}
  </div>
);

const interestList = [
  { name: 'Football', icon: <RiFootballLine /> },
  { name: 'Pool', icon: <RiBilliardsLine /> },
  { name: 'Code', icon: <RiTerminalBoxLine /> },
  { name: 'Music', icon: <RiMusic2Line /> },
  { name: 'Movie', icon: <RiMovie2Line /> },
  { name: 'YouTube', icon: <RiYoutubeLine /> },
];

const interestsNode = (
  <div className={css['interests-wrapper']}>
    {interestList.map((interest) => (
      <div key={interest.name}>
        {interest.icon}
        <span>{interest.name}</span>
      </div>
    ))}
  </div>
);

const experienceList = [
  {
    role: 'Full-Stack Developer',
    company: 'HiSoft',
    companyURL: 'https://www.facebook.com/hisoftcompany/',
    period: 'Mar 2017 — Sep 2017',
    details: (
      <p>
        Maintain and develop new features for&nbsp;
        <b>QTSC OMS (Quang Trung Software City Operations Management Suite)</b>
        &nbsp;mobile app to minimize the amount of paper work and procedure
        for&nbsp;
        <b>QTSC</b>.
      </p>
    ),
  },
  {
    role: 'Full-Stack Developer',
    company: 'Bakco',
    companyURL: 'https://www.bakco.com.vn/',
    period: 'Nov 2017 — July 2018 & July 2019 — sep 2020',
    details: (
      <>
        <p>
          Responsible for developing <b>Hospital Management</b> module to help
          hospitals easily manage their own internal resources and connect with
          others using one platform.
        </p>
        <p>
          Lead Front-End team of 2 to develop several apps like:
          <br />• <b>PHR (Personal Health Record)</b> letting user to track
          their medical records and body indexes
          <br />• <b>CDS (Control Disease System)</b> for <b>HCDC</b> to record
          and manage the covid-19 infection chains in hcm city.
        </p>
      </>
    ),
  },
  {
    role: 'Full-Stack Developer',
    company: 'CodeLink',
    companyURL: 'https://www.codelink.io/',
    period: 'Oct 2020 — Present',
    details: (
      <>
        <p>
          Update the company&apos;s website and add a CI config to build
          automatically using <b>CircleCI</b>
        </p>
        <p>
          Outsourcing for <b>Electronic Arts</b> to help build an application
          that manage marketing assets (videos, images, ...) and use{' '}
          <b>Machine Learning</b> and <b>Serverless</b> to create audience
          targeted marketing videos
        </p>
      </>
    ),
  },
];

const experiencesNode = (
  <div className={css['experiences-wrapper']}>
    {experienceList.map((experience) => (
      <div key={experience.period} className={css['experience']}>
        <p className={css['company-role']}>
          <b>{experience.role}</b>
          &nbsp;at&nbsp;
          <b>
            <a href={experience.companyURL} target="_blank" rel="noreferrer">
              {experience.company}
            </a>
          </b>
        </p>
        <span>{experience.period}</span>
        {experience.details}
      </div>
    ))}
  </div>
);

const Home: NextPage = () => (
  <div className={css['wrapper']}>
    <Head>
      <title>{`<dxanh97 />`}</title>
    </Head>
    <div className={css['top-section']}>{topSectionNode}</div>
    <div className={css['information-wrapper']}>
      <div>
        <div className={css['information-section']}>
          <h3>About</h3>
          <span className={css['justify']}>
            A self-learning, open-minded software engineer. Expertise in
            JavaScript/TypeScript with over 3 years of experience. Software
            developing is a craft and I&apos;m aiming to be a better craftsman
            each day.
          </span>
        </div>
        <div className={css['information-section']}>
          <h3>Tech</h3>
          {techNode}
        </div>

        <div className={css['information-section']}>
          <h3>Interests</h3>
          {interestsNode}
        </div>
      </div>
      <div>
        <div className={css['information-section']}>
          <h3>Experiences</h3>
          {experiencesNode}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
