import { FC } from 'react';
import './ButtonMain.scss';

interface ButtonMainProps {
  children: string;
  style?: React.CSSProperties;
  onСlick?: () => void;
}

const ButtonMain: FC<ButtonMainProps> = ({ children, style, onСlick }) => {
  return (
    <button onClick={onСlick} style={style} className="button-main">
      {children}
    </button>
  );
};

export default ButtonMain;
