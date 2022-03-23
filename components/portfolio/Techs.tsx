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
import styled from 'styled-components';

const Tag = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primary};
  margin-right: 8px;
  margin-bottom: 8px;
  & > div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 4px;
      font-size: 16px;
    }
  }
`;

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
      <Tag key={tech.name}>
        <div>
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      </Tag>
    ))}
  </>
);

export default Techs;
