import { RefObject } from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: right;
  padding-right: 20px;
  border-right: 4px solid ${(props) => props.theme.primary};
`;
const Name = styled.h1`
  text-transform: uppercase;
  font-family: Yeseva One;
  font-size: 64px;
  line-height: 80px;
  font-weight: 400;
  letter-spacing: 4px;
  margin-bottom: 16px;
`;
const Title = styled.div`
  margin-bottom: 16px;
  text-transform: uppercase;
  span {
    padding: 4px 8px;
    letter-spacing: 2px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`;
const ContactWrapper = styled.div`
  a {
    margin-left: 24px;
    font-size: 24px;
    svg {
      vertical-align: bottom;
    }
  }
`;

interface ContactRefs {
  $mail: RefObject<HTMLAnchorElement>;
  $github: RefObject<HTMLAnchorElement>;
  $linkedin: RefObject<HTMLAnchorElement>;
}

const contactList = (refs: ContactRefs) => [
  {
    href: 'mailto:dxanh97@gmail.com',
    icon: <FiMail />,
    ref: refs.$mail,
  },
  {
    href: 'https://github.com/dxanh97',
    icon: <FiGithub />,
    ref: refs.$github,
  },
  {
    href: 'https://www.linkedin.com/in/dxanh97',
    icon: <FiLinkedin />,
    ref: refs.$linkedin,
  },
];

const NameAndTitle = (refs: ContactRefs) => (
  <Wrapper>
    <Name>
      Đặng
      <br />
      Xuân
      <br />
      Anh
    </Name>
    <Title>
      <span>Software Engineer</span>
    </Title>
    <ContactWrapper>
      {contactList(refs).map((contact) => (
        <a
          key={contact.href}
          ref={contact.ref}
          target="_blank"
          rel="noreferrer"
          href={contact.href}
        >
          {contact.icon}
        </a>
      ))}
    </ContactWrapper>
  </Wrapper>
);

export default NameAndTitle;
