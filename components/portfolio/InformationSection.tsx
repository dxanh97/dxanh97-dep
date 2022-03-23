import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
  font-size: 24px;
  letter-spacing: 2px;
  font-family: Yeseva One;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 40px;
  text-decoration: underline 4px;
`;

interface Props {
  header: string;
  content: React.ReactNode;
}

const InformationSection: React.FC<Props> = ({ header, content }) => (
  <>
    <Header>{header}</Header>
    {content}
  </>
);

export default InformationSection;
