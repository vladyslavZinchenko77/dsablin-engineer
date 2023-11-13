import BurgerMenuIcon from '../../common/BurgerMenuIcon/BurgerMenuIcon';
import { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <div className="header__wrap">
      <BurgerMenuIcon
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      />

      <header className={open ? 'header' : 'header--close'}>
        <nav>
          <ul className="header__nav">
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('about')}
              >
                About me
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('skills')}
              >
                Skills
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('expierence')}
              >
                Expierence
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('contact')}
              >
                Contact me
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
