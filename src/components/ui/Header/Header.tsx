import BurgerMenuIcon from '../../common/BurgerMenuIcon/BurgerMenuIcon';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <BurgerMenuIcon />
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
  );
};

export default Header;
