import { FC } from 'react';
import './BurgerMenuIcon.scss';

interface BurgerMenuIcon {
  open: boolean;
  onClick: () => void;
}

const BurgerMenuIcon: FC<BurgerMenuIcon> = ({ open, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={open ? 'burger-icon-open' : 'burger-icon'}
    >
      <div className="burger-icon__first"></div>
      <div className="burger-icon__second"></div>
      <div className="burger-icon__third"></div>
    </div>
  );
};

export default BurgerMenuIcon;
