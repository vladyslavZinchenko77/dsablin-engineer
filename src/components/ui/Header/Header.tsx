import BurgerMenuIcon from '../../common/BurgerMenuIcon/BurgerMenuIcon';
import { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="header__wrap">
      <header className="header">
        <BurgerMenuIcon
          open={open}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <nav>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-item-link" href="">
                About me
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item-link" href="">
                Skills
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item-link" href="">
                Portfolio
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item-link" href="">
                Expierence
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item-link" href="">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
