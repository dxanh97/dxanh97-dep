import React, { RefObject } from 'react';

import css from '../styles/ExperienceSection.module.scss';

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
    period: 'March 2017 — September 2017',
    // prettier-ignore
    details: (
      <p>
        Maintained and developed new features
        for <b>QTSC OMS (Quang Trung Software City Operations Management Suite)</b> mobile
        app to minimize the amount of paperwork and procedure
        for <b>QTSC</b>.
      </p>
    ),
  },
  {
    role: 'Full-Stack Developer',
    company: 'Bakco',
    companyURL: 'https://www.bakco.com.vn/',
    ref: refs.$bakco,
    period: 'November 2017 — July 2018 & July 2019 — September 2020',
    // prettier-ignore
    details: (
      <>
        <p>
          Was responsible for developing <b>Hospital Management</b> module to help
          hospitals easily manage their internal resources and connect with
          others using only one platform.
        </p>
        <p>
          Led Front-End team of 2 to develop several apps like:
          <br />• <b>PHR (Personal Health Record)</b> that let users track their
          medical records and body indexes.
          <br />• <b>CDS (Control Disease System)</b> for <b>HCDC (HCMC Center for
          Disease Control)</b> to record and manage the Covid-19 infection chains in HCM city.
        </p>
      </>
    ),
  },
  {
    role: 'Full-Stack Developer',
    company: 'CodeLink',
    companyURL: 'https://www.codelink.io/',
    ref: refs.$codelink,
    period: 'October 2020 — Present',
    // prettier-ignore
    details: (
      <>
        <p>
          Updated the company&apos;s website and add a CI config to build
          bundles automatically using <b>CircleCI</b>. Integrate
          with <b>Google Analytics</b> dashboards to set up all tracking
          flows for the website. Used <b>Strapi</b> to set up a headless CMS
          for managing CodeLink&apos;s Playbook.
        </p>
        <p>
          Outsourced for <b>Electronic Arts</b> to help build an admin dashboard
          that manages marketing assets (videos, images, ...)
          and use <b>Machine Learning</b>, <b>Serverless</b>, and <b>NestJS</b> to
          create audience-targeted marketing videos.
        </p>
        <p>
          Used <b>React</b>, <b>Redux</b>, <b>Firebase</b>, and <b>GitHub Actions</b> to
          create an annotation tool for preparing audio data for
          a <b>Machine Learning</b> model to produce a <b>Text-to-Speech</b> service.
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
