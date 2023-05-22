import React from 'react';
import { RiBilliardsLine, RiMovie2Line } from 'react-icons/ri';
import {
  TbBrandYoutube,
  TbChessKing,
  TbMusic,
  TbSoccerField,
  TbTerminal2,
} from 'react-icons/tb';

import css from './Interests.module.scss';

const interestList = [
  { name: 'Pool', icon: <RiBilliardsLine /> },
  { name: 'Chess', icon: <TbChessKing /> },
  { name: 'Football', icon: <TbSoccerField /> },
  { name: 'Code', icon: <TbTerminal2 /> },
  { name: 'Music', icon: <TbMusic /> },
  { name: 'Movie', icon: <RiMovie2Line /> },
  { name: 'YouTube', icon: <TbBrandYoutube /> },
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
