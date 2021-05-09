import React from 'react';
import styled from 'styled-components';
import { IoCall, IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { SectionHeader } from '.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & > div.contact {
    width: 40%;
    padding: 16px;
    & > div.info-row {
      padding: 8px 0 0;
      & > svg {
        margin-right: 8px;
        font-size: 20px;
        vertical-align: bottom;
      }
      & > a {
        text-decoration: underline;
        color: #000000;
      }
    }
  }
  & > div.about {
    width: 60%;
    padding: 16px;
    & p.content {
      margin-top: 4px;
    }
  }
`;

const ContactAndAbout: React.FC = () => {
  return (
    <Wrapper>
      <div className="contact">
        <SectionHeader title="Contact" />
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
      <div className="about">
        <div>
          <SectionHeader title="About Me" />
          <p className="content">
            A self-learning, open-minded software engineer. Expertise in
            JavaScript/TypeScript with over 3 years of experience. Software
            developing is a craft and I'm aiming to be a better craftsman
            everyday.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactAndAbout;
