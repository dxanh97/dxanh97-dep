import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '.';

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  & p.content {
    margin-top: 4px;
  }
`;

const AboutMe: React.FC = () => (
  <Wrapper>
    <SectionHeader title="About Me" />
    <p className="content">
      A self-learning, open-minded software engineer. Expertise in
      JavaScript/TypeScript with over 3 years of experience. Software developing
      is a craft and I'm aiming to be a better craftsman everyday.
    </p>
  </Wrapper>
);

export default AboutMe;
