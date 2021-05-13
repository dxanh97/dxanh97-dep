import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import { Theme } from '@dxanh97/models';
import { themes } from '@dxanh97/constants';
import { hexToRgba } from '@dxanh97/utils';

const Wrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 4px;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border: 1px solid;
  border-color: ${(props) => hexToRgba(props.theme.text, 0.6)};
  background: ${(props) => hexToRgba(props.theme.text, 0.1)};
  border-radius: 4px;
`;

interface ThemeButtonProps {
  themeSet: Theme;
}

const ThemeButton = styled.button`
  position: relative;
  padding: 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  & > div {
    line-height: 20px;
    border-radius: 2px;
    min-width: 20px;
    min-height: 20px;
    color: ${(props: ThemeButtonProps) => props.themeSet.text};
    background: ${(props: ThemeButtonProps) => props.themeSet.paper};
    ${down('md')} {
      font-size: 10px;
    }
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
      {Object.values(themes).map((theme) => (
        <ThemeButton
          key={theme.backdrop}
          themeSet={theme}
          onClick={() => setSelected(theme)}
        >
          <div>{selected.key === theme.key && '𐄂'}</div>
        </ThemeButton>
      ))}
    </Wrapper>
  );
};

export default ThemePicker;
