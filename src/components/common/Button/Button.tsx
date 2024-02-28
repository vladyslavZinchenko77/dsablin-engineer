import { FC } from 'react';
import './Button.scss';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  children: string;
  type: ButtonType;
  style?: React.CSSProperties;
  onClick?: () => void;
  isBlack: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  onClick,
  isBlack,
  type,
}) => {
  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      className={isBlack ? 'button-black' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
