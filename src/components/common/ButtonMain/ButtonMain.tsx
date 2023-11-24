import { FC } from 'react';
import './ButtonMain.scss';

interface ButtonMainProps {
  children: string;
  style?: React.CSSProperties;
  oncklick?: () => void;
}

const ButtonMain: FC<ButtonMainProps> = ({ children, style, oncklick }) => {
  return (
    <button onClick={oncklick} style={style} className="button-main">
      {children}
    </button>
  );
};

export default ButtonMain;
