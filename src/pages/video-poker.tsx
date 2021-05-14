import React from 'react';
import styled from 'styled-components';

import { Layout } from '@dxanh97/components/common';
import { Card } from '@dxanh97/components/video-poker';
import { VideoPoker } from '@dxanh97/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const { CardNumber } = VideoPoker;

const VideoPokerPage: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        {[
          CardNumber.ACE,
          CardNumber.KING,
          CardNumber.QUEEN,
          CardNumber.JACK,
          CardNumber.TEN,
        ].map((i) => (
          <Card key={i} cardNumber={i} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default VideoPokerPage;
