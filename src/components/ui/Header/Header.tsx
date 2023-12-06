// import { FC, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import BurgerMenuIcon from '../../common/BurgerMenuIcon/BurgerMenuIcon';
// import './Header.scss';

// const Header: FC = () => {
//   const [open, setOpen] = useState(false);
//   const { t } = useTranslation();

//   const handleLinkClick = (sectionId: string) => {
//     const section = document.getElementById(sectionId);

//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setOpen(false);
//     }
//   };

//   return (
//     <div className="header__wrap">
//       <BurgerMenuIcon
//         open={open}
//         onClick={() => {
//           setOpen(!open);
//         }}
//       />

//       <header className={open ? 'header' : 'header--close'}>
//         <nav>
//           <ul className="header__nav">
//             <li className="header__nav-item">
//               <button
//                 className="header__nav-item-link"
//                 onClick={() => handleLinkClick('about')}
//               >
//                 {t('header.about')}
//               </button>
//             </li>
//             <li className="header__nav-item">
//               <button
//                 className="header__nav-item-link"
//                 onClick={() => handleLinkClick('skills')}
//               >
//                 {t('header.skills')}
//               </button>
//             </li>
//             <li className="header__nav-item">
//               <button
//                 className="header__nav-item-link"
//                 onClick={() => handleLinkClick('portfolio')}
//               >
//                 {t('header.portfolio')}
//               </button>
//             </li>
//             <li className="header__nav-item">
//               <button
//                 className="header__nav-item-link"
//                 onClick={() => handleLinkClick('experience')}
//               >
//                 {t('header.expierence')}
//               </button>
//             </li>
//             <li className="header__nav-item">
//               <button
//                 className="header__nav-item-link"
//                 onClick={() => handleLinkClick('contact')}
//               >
//                 {t('header.contacts')}
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BurgerMenuIcon from '../../common/BurgerMenuIcon/BurgerMenuIcon';
import './Header.scss';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

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
                {t('header.about')}
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('skills')}
              >
                {t('header.skills')}
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('portfolio')}
              >
                {t('header.portfolio')}
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('experience')}
              >
                {t('header.expierence')}
              </button>
            </li>
            <li className="header__nav-item">
              <button
                className="header__nav-item-link"
                onClick={() => handleLinkClick('contact')}
              >
                {t('header.contacts')}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
