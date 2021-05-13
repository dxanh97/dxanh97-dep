import React from 'react';
import styled from 'styled-components';
import {
  RiFootballLine,
  RiBilliardsLine,
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
} from 'react-icons/ri';

import { SectionHeader } from '.';

const Wrapper = styled.div`
  padding: 16px;
  & > div.hobbies-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    & > div.hobby {
      width: 100%;
      margin-bottom: 4px;
      & > svg {
        margin-right: 4px;
        vertical-align: middle;
      }
    }
  }
`;

const hobbies = [
  { icon: <RiFootballLine />, name: 'Football' },
  { icon: <RiBilliardsLine />, name: 'Pool' },
  { icon: <RiTerminalBoxLine />, name: 'Code' },
  { icon: <RiMusic2Line />, name: 'Music' },
  { icon: <RiMovie2Line />, name: 'Movie' },
  { icon: <RiYoutubeLine />, name: 'YouTube' },
];

const Hobbies: React.FC = () => (
  <Wrapper>
    <SectionHeader title="Hobbies" />
    <div className="hobbies-wrapper">
      {hobbies.map((hobby) => (
        <div key={hobby.name} className="hobby">
          {hobby.icon}
          <span>{hobby.name}</span>
        </div>
      ))}
    </div>
  </Wrapper>
);

export default Hobbies;
