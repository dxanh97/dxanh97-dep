import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import { Theme } from '@dxanh97/models';
import { themes } from '@dxanh97/constants';

const Wrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 4px;
  display: flex;
  flex-direction: column;
`;

const ThemeButton = styled.button`
  position: relative;
  margin-bottom: 4px;
  padding: 0;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${(props: { themeSet: Theme }) => props.themeSet.text};
  transition: 0.05s ease;
  cursor: pointer;
  & > div {
    padding: 4px 0;
    border-radius: 4px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: ${(props: { themeSet: Theme }) => props.themeSet.text};
    background: ${(props: { themeSet: Theme }) => props.themeSet.paper};
    border-color: ${(props: { themeSet: Theme }) => props.themeSet.text};
    transition: 0.05s ease;
    ${down('md')} {
      font-size: 10px;
    }
  }
`;

interface Props {
  onSelect: (theme: Theme) => void;
}

const ThemePicker: React.FC<Props> = ({ onSelect }) => (
  <Wrapper>
    {Object.keys(themes).map((themeName, index) => {
      const theme = Object.values(themes)[index];
      return (
        <ThemeButton
          key={theme.backdrop}
          themeSet={theme}
          onClick={() => onSelect(theme)}
        >
          <div>{themeName}</div>
        </ThemeButton>
      );
    })}
  </Wrapper>
);

export default ThemePicker;
