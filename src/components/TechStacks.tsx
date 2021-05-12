import React from 'react';
import styled from 'styled-components';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiGatsby,
  SiExpo,
  SiNodeDotJs,
  SiAmazonaws,
  SiCircleci,
  SiServerless,
  SiGit,
  SiEslint,
  SiPrettier,
  SiVim,
} from 'react-icons/si';

import { SectionHeader } from '.';

const Wrapper = styled.div`
  padding: 16px;
  & > div.badge-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    & > span.badge {
      border: 1px solid #005661;
      border: 1px solid ${(props) => props.theme.text};
      border-radius: 4px;
      padding: 4px 8px;
      margin: 0 4px 4px 0;
      & > svg {
        margin-right: 4px;
        vertical-align: middle;
        font-size: 16px;
      }
    }
  }
`;

const stacks = [
  { icon: <SiJavascript />, text: 'JavaScript' },
  { icon: <SiTypescript />, text: 'TypeScript' },
  { icon: <SiReact />, text: 'React' },
  { icon: <SiRedux />, text: 'Redux' },
  { icon: <SiGatsby />, text: 'GatsbyJS' },
  { icon: <SiExpo />, text: 'Expo' },
  { icon: <SiNodeDotJs />, text: 'NodeJS' },
  { icon: <SiAmazonaws />, text: 'AWS' },
  { icon: <SiServerless />, text: 'Serverless' },
  { icon: <SiCircleci />, text: 'CircleCI' },
  { icon: <SiGit />, text: 'Git' },
  { icon: <SiEslint />, text: 'ESLint' },
  { icon: <SiPrettier />, text: 'Prettier' },
  { icon: <SiVim />, text: 'Vim' },
];

const TechStacks: React.FC = () => (
  <Wrapper>
    <SectionHeader title="Tech Stacks" />
    <div className="badge-wrapper">
      {stacks.map((stack) => (
        <span key={stack.text} className="badge">
          {stack.icon}
          <span>{stack.text}</span>
        </span>
      ))}
    </div>
  </Wrapper>
);

export default TechStacks;
