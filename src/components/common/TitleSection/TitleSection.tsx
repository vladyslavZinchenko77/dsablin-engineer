import { FC } from 'react';
import './TitleSection.scss';

interface TitleSectionProps {
  textAlign: 'left' | 'center' | 'right';
  children: string;
  id?: string;
  color?: string;
}

const TitleSection: FC<TitleSectionProps> = ({
  textAlign,
  children,
  id,
  color,
}) => {
  const styles = {
    textAlign: textAlign,
    color: color,
  };

  return (
    <h2 id={id} className="section__title" style={styles}>
      {children}
    </h2>
  );
};

export default TitleSection;
