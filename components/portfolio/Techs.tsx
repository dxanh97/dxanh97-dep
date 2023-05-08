import React from 'react';
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

import css from './Techs.module.scss';

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

const Techs = (
  <>
    {techList.map((tech) => (
      <div key={tech.name} className={css['tag']}>
        <div>
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      </div>
    ))}
  </>
);

export default Techs;
