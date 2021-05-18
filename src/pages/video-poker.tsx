import React, { useState } from 'react';
import styled from 'styled-components';

import { Layout } from '../components/common';
import { Card } from '../components/video-poker';
import { CardDeck } from '../constants/video-poker';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VideoPokerPage: React.FC = () => {
  const [red, setRed] = useState('#DC143C');
  const [black, setBlack] = useState('');
  return (
    <Layout>
      <label>
        <span>Red</span>
        <br />
        <input value={red} onChange={(e) => setRed(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        <span>Black</span>
        <br />
        <input value={black} onChange={(e) => setBlack(e.target.value)} />
      </label>
      <br />
      <br />
      <Wrapper>
        {[1, 2, 3, 4].map((num) => (
          <div key={num}>
            {CardDeck.slice(13 * num - 13, 13 * num - 1).map((card) => (
              <Card
                key={card.displayText}
                displayText={card.displayText}
                suit={card.suit}
                red={red}
                black={black}
              />
            ))}
          </div>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default VideoPokerPage;
