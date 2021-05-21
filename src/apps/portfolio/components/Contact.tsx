import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { IoCall, IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

import SectionHeader from './SectionHeader';

const Wrapper = styled.div`
  padding: 16px;
  & > div.info-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
    ${down('md')} {
      flex-direction: column;
    }
    & > div.info-row {
      ${down('md')} {
        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
      & > svg {
        margin-right: 8px;
        font-size: 20px;
        vertical-align: bottom;
      }
      & > a {
        text-decoration: underline 1px;
        color: #005661;
        color: ${(props) => props.theme.text};
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
