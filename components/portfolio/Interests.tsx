import React from 'react';
import {
  RiFootballLine,
  RiBilliardsLine,
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
} from 'react-icons/ri';

import css from './Interests.module.scss';

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
      <div key={interest.name} className={css['wrapper']}>
        {interest.icon}
        <span>{interest.name}</span>
      </div>
    ))}
  </>
);

export default Interests;
