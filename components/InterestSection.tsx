import React from 'react';
import {
  RiFootballLine,
  RiBilliardsLine,
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
} from 'react-icons/ri';

import css from '../styles/index.module.scss';

const interestList = [
  { name: 'Football', icon: <RiFootballLine /> },
  { name: 'Pool', icon: <RiBilliardsLine /> },
  { name: 'Code', icon: <RiTerminalBoxLine /> },
  { name: 'Music', icon: <RiMusic2Line /> },
  { name: 'Movie', icon: <RiMovie2Line /> },
  { name: 'YouTube', icon: <RiYoutubeLine /> },
];

const InterestSection = (
  <div className={css['interests-wrapper']}>
    {interestList.map((interest) => (
      <div key={interest.name}>
        {interest.icon}
        <span>{interest.name}</span>
      </div>
    ))}
  </div>
);

export default InterestSection;
