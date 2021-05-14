import React from 'react';
import styled from 'styled-components';

import { VideoPoker } from '@dxanh97/constants';

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  border: 4px solid;
  border-color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.paper};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & * {
    font-family: 'FrederickatheGreat';
  }
  & > p.face {
    font-size: 130px;
    margin: 0;
  }
`;

interface Props {
  cardNumber: VideoPoker.CardNumber;
}

const getCardFace = (cardNumber: VideoPoker.CardNumber): string => {
  const { ACE, KING, QUEEN, JACK } = VideoPoker.CardNumber;
  if (cardNumber === ACE) return 'A';
  if (cardNumber === KING) return 'K';
  if (cardNumber === QUEEN) return 'Q';
  if (cardNumber === JACK) return 'J';
  return `${cardNumber}`;
};

const Card: React.FC<Props> = ({ cardNumber }) => {
  return (
    <Wrapper>
      <p className="face">{getCardFace(cardNumber)}</p>
      <p className="suit">heart</p>
    </Wrapper>
  );
};

export default Card;