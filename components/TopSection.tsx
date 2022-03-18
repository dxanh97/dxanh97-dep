import { RefObject } from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

import css from '../styles/index.module.scss';

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

const TopSection = (refs: ContactRefs) => (
  <>
    <h1 className={css['header']}>
      Đặng
      <br />
      Xuân
      <br />
      Anh
    </h1>
    <div className={css['job-title']}>
      <span>Software Engineer</span>
    </div>
    <div className={css['contact-wrapper']}>
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
    </div>
  </>
);

export default TopSection;
