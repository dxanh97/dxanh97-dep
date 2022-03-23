import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Header = styled.h3`
  font-size: 24px;
  letter-spacing: 2px;
  font-family: Yeseva One;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 32px;
  text-decoration: underline 4px;
`;

interface Props {
  header: string;
  content: React.ReactNode;
}

const InformationSection: React.FC<Props> = ({ header, content }) => (
  <Wrapper>
    <Header>{header}</Header>
    {content}
  </Wrapper>
);

export default InformationSection;
