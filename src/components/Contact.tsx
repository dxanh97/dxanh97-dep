import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { IoCall, IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { SectionHeader } from '.';

const Wrapper = styled.div`
  padding: 16px;
  & > div.info-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${down('md')} {
      flex-direction: column;
    }
    & > div.info-row {
      padding: 8px 0 0;
      & > svg {
        margin-right: 8px;
        font-size: 20px;
        vertical-align: bottom;
      }
      & > a {
        text-decoration: underline 1px;
        color: #000000;
      }
    }
  }
`;

const Contact: React.FC = () => (
  <Wrapper>
    <SectionHeader title="Contact" />
    <div className="info-wrapper">
      <div className="info-row">
        <IoCall />
        <a href="tel:0962712504">0962712504</a>
      </div>
      <div className="info-row">
        <IoMail />
        <a href="mailto:dxanh97@gmail.com">dxanh97@gmail.com</a>
      </div>
      <div className="info-row">
        <IoLogoLinkedin />
        <a href="">linkedin.com/dxanh97</a>
      </div>
      <div className="info-row">
        <IoLogoGithub />
        <a href="https://github.com/dxanh97">github.com/dxanh97</a>
      </div>
    </div>
  </Wrapper>
);

export default Contact;