import React from 'react';
import styled from 'styled-components';

import { CardSuit } from '../../models/video-poker';

interface WrapperProps {
  red?: string;
  black?: string;
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 5px;
  font-size: 130px;
  color: ${(props) => props.theme.text};
  color: ${(props: WrapperProps) => props.red && props.red};
  color: ${(props: WrapperProps) => props.black && props.black};
  cursor: pointer;
`;

interface Props {
  displayText: string;
  suit?: CardSuit;
  red?: string;
  black?: string;
}

const Card: React.FC<Props> = ({ displayText, suit, red, black }) => {
  const isRed = suit === CardSuit.HEART || suit === CardSuit.DIAMOND;
  return (
    <Wrapper red={isRed ? red : undefined} black={!isRed ? black : undefined}>
      {displayText}
    </Wrapper>
  );
};

export default Card;
