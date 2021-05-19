import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Layout } from '../components/common';
import { Card as CardComp } from '../components/video-poker';
import { Card } from '../models/video-poker';
import { randomCards } from '../utils/video-poker';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VideoPokerPage: React.FC = () => {
  const [red] = useState('#DC143C');
  const [black] = useState('');

  const [cards, setCards] = useState<Card[]>([]);
  const [savedCards, setSavedCards] = useState<Card[]>([]);

  const random = useCallback(() => {
    setCards(randomCards(savedCards));
    setSavedCards([]);
  }, [savedCards]);

  useEffect(() => random(), []);

  return (
    <Layout>
      <Wrapper>
        {cards.map((card) => {
          const isSaved = savedCards.find(
            (c) => c.suit === card.suit && c.value === card.value,
          );
          return (
            <div
              key={card.displayText}
              onClick={() => {
                if (!isSaved) {
                  setSavedCards((scs) => [...scs.slice(0, 4), card]);
                } else {
                  setSavedCards((scs) =>
                    scs.filter(
                      (c) => c.suit === card.suit && c.value === card.value,
                    ),
                  );
                }
              }}
            >
              {isSaved && '✅'}
              <CardComp
                displayText={card.displayText}
                suit={card.suit}
                red={red}
                black={black}
              />
            </div>
          );
        })}
      </Wrapper>
      <button onClick={() => random()}>🎲</button>
    </Layout>
  );
};

export default VideoPokerPage;
