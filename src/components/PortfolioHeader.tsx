import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const Wrapper = styled.div`
  text-align: center;
  border-bottom: 1px solid;
  & > div.name {
    padding: 20px;
    padding-bottom: 8px;
    font-size: 50px;
    ${down('md')} {
      padding: 16px;
      padding-bottom: 4px;
      font-size: 36px;
    }
  }
  & > div.title {
    padding: 0 20px 20px;
    font-size: 20px;
    ${down('md')} {
      padding: 0 16px 16px;
      font-size: 16px;
    }
  }
`;

const PortfolioHeader: React.FC = () => (
  <Wrapper>
    <div className="name">Đặng Xuân Anh</div>
    <div className="title">Software Engineer</div>
  </Wrapper>
);

export default PortfolioHeader;