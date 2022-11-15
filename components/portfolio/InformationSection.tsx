import React from 'react';

import css from './InformationSection.module.scss';

interface Props {
  header: string;
  content: React.ReactNode;
}

const InformationSection: React.FC<Props> = ({ header, content }) => (
  <>
    <h3 className={css['header']}>
      <span className="gold-text">{header}</span>
    </h3>
    <span className="gold-text">{content}</span>
  </>
);

export default InformationSection;
