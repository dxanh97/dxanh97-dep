import React, { RefObject } from 'react';

import css from '../styles/index.module.scss';

interface ExperienceRefs {
  $hisoft: RefObject<HTMLAnchorElement>;
  $bakco: RefObject<HTMLAnchorElement>;
  $codelink: RefObject<HTMLAnchorElement>;
}

const experienceList = (refs: ExperienceRefs) => [
  {
    role: 'Full-Stack Developer',
    company: 'HiSoft',
    companyURL: 'https://www.facebook.com/hisoftcompany/',
    ref: refs.$hisoft,
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
    ref: refs.$bakco,
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
    ref: refs.$codelink,
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

const ExperienceSection = (refs: ExperienceRefs) => (
  <div className={css['experiences-wrapper']}>
    {experienceList(refs).map((experience) => (
      <div key={experience.period} className={css['experience']}>
        <p className={css['company-role']}>
          <b>{experience.role}</b>
          &nbsp;at&nbsp;
          <b>
            <a
              ref={experience.ref}
              href={experience.companyURL}
              target="_blank"
              rel="noreferrer"
            >
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

export default ExperienceSection;
