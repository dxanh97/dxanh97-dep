import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '@dxanh97/models';
import { themes } from '@dxanh97/constants';

const Wrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  flex-direction: row;
  padding: 2px;
  border-radius: 4px;
  vertical-align: middle;
`;

interface ThemeButtonProps {
  themeSet: Theme;
  selected: boolean;
}

const ThemeButton = styled.button`
  position: relative;
  padding: 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'YesevaOne';
  font-weight: bold;
  padding: 2px 4px;
  color: ${(props: ThemeButtonProps) => props.themeSet.paper};
  background: ${(props: ThemeButtonProps) => props.themeSet.text};
  ${(props: ThemeButtonProps) =>
    props.selected &&
    css`
      text-decoration: underline 2px;
    `}
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

interface Props {
  onSelect: (theme: Theme) => void;
}

const ThemePicker: React.FC<Props> = ({ onSelect }) => {
  const [selected, setSelected] = useState(themes.lila);
  useEffect(() => {
    onSelect(selected);
  }, [selected]);
  return (
    <Wrapper>
      {Object.values(themes).map((theme, index) => (
        <ThemeButton
          key={theme.backdrop}
          themeSet={theme}
          onClick={() => setSelected(theme)}
          selected={selected.key === theme.key}
        >
          {Object.keys(themes)[index]}
        </ThemeButton>
      ))}
    </Wrapper>
  );
};

export default ThemePicker;
