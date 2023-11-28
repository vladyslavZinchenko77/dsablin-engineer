import { FC } from 'react';
import Line from '../Line/Line';
import './TitleSection.scss';

interface TitleSectionProps {
  children: string;
  id?: string;
  color?: string;
  justifyContent?: string;
  lineColor?: string;
}

const TitleSection: FC<TitleSectionProps> = ({
  children,
  id,
  color,
  justifyContent,
  lineColor,
}) => {
  return (
    <div style={{ display: 'flex', justifyContent: justifyContent }}>
      <h2
        id={id}
        className="section__title"
        style={{
          color: color,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Line color={lineColor} />
      </h2>
    </div>
  );
};

export default TitleSection;
