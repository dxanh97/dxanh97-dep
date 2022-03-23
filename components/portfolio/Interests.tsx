import React from 'react';
import {
  RiFootballLine,
  RiBilliardsLine,
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
} from 'react-icons/ri';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  svg {
    margin-right: 8px;
  }
`;

const interestList = [
  { name: 'Football', icon: <RiFootballLine /> },
  { name: 'Pool', icon: <RiBilliardsLine /> },
  { name: 'Code', icon: <RiTerminalBoxLine /> },
  { name: 'Music', icon: <RiMusic2Line /> },
  { name: 'Movie', icon: <RiMovie2Line /> },
  { name: 'YouTube', icon: <RiYoutubeLine /> },
];

const Interests = (
  <>
    {interestList.map((interest) => (
      <Wrapper key={interest.name}>
        {interest.icon}
        <span>{interest.name}</span>
      </Wrapper>
    ))}
  </>
);

export default Interests;
