import React from 'react';

import css from './InformationSection.module.scss';

interface Props {
  header: string;
  content: React.ReactNode;
}

const InformationSection: React.FC<Props> = ({ header, content }) => (
  <>
    <h3 className={css['header']}>{header}</h3>
    {content}
  </>
);

export default InformationSection;
