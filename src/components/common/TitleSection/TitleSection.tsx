import { FC } from 'react';
import './TitleSection.scss';

interface TitleSectionProps {
  textAlign: 'left' | 'center' | 'right';
  children: string;
  id?: string;
}

const TitleSection: FC<TitleSectionProps> = ({ textAlign, children, id }) => {
  const styles = {
    textAlign: textAlign,
  };

  return (
    <h2 id={id} className="section__title" style={styles}>
      {children}
    </h2>
  );
};

export default TitleSection;
