import { FC } from 'react';
import './TitleSection.scss';

interface TitleSectionProps {
  textAlign: 'left' | 'center' | 'right';
  children: string;
}

const TitleSection: FC<TitleSectionProps> = ({ textAlign, children }) => {
  const styles = {
    textAlign: textAlign,
  };

  return (
    <h2 className="section__title" style={styles}>
      {children}
    </h2>
  );
};

export default TitleSection;
