import { FC } from 'react';
import './ButtonMain.scss';

interface ButtonMainProps {
  children: string;
  style?: React.CSSProperties;
}

const ButtonMain: FC<ButtonMainProps> = ({ children, style }) => {
  return (
    <button style={style} className="button-main">
      {children}
    </button>
  );
};

export default ButtonMain;
