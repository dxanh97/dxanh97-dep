import { RefObject } from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

import css from './NameAndTitle.module.scss';

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
  <div className={css['wrapper']}>
    <h1 className={css['name']}>
      <span className="gold-text">
        Đặng
        <br />
        Xuân
        <br />
        Anh
      </span>
    </h1>
    <div className={css['title']}>
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
  </div>
);

export default NameAndTitle;
