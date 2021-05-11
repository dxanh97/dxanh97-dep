import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '.';

const Wrapper = styled.div`
  padding: 16px;
  & > p.content {
    margin: 16px 0 0;
  }
`;

const AboutMe: React.FC = () => (
  <Wrapper>
    <SectionHeader title="About Me" />
    <p className="content">
      A self-learning, open-minded software engineer. Expertise in
      JavaScript/TypeScript with over 3 years of experience. Software developing
      is a craft and I'm aiming to be a better craftsman each day.
    </p>
  </Wrapper>
);

export default AboutMe;
