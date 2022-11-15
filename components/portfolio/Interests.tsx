import React from 'react';
import {
  RiFootballLine,
  RiBilliardsLine,
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
} from 'react-icons/ri';
import { GiChessQueen } from 'react-icons/gi';

import css from './Interests.module.scss';

const interestList = [
  { name: 'Pool', icon: <RiBilliardsLine /> },
  { name: 'Football', icon: <RiFootballLine /> },
  { name: 'Chess', icon: <GiChessQueen /> },
  { name: 'Code', icon: <RiTerminalBoxLine /> },
  { name: 'Music', icon: <RiMusic2Line /> },
  { name: 'Movie', icon: <RiMovie2Line /> },
  { name: 'YouTube', icon: <RiYoutubeLine /> },
];

const Interests = (
  <>
    {interestList.map((interest) => (
      <div key={interest.name} className={css['wrapper']}>
        <span className="gold-text">
          {interest.icon}
          <span>{interest.name}</span>
        </span>
      </div>
    ))}
  </>
);

export default Interests;
