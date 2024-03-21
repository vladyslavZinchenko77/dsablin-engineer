import { useBreakpoints } from '../../../hooks/useBreakpoints';
import { useTranslation } from 'react-i18next';

import arrow from '../../../assets/img/arrow.svg';

import './Footer.scss';

const Footer = () => {
  const { isMobile } = useBreakpoints();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__connect">
        <img
          src={arrow}
          alt="arrow"
          style={{ transform: isMobile ? 'rotate(90deg)' : '' }}
        />
        <div className="footer__connect-text">
          <p>{t('footer.contact')}</p>
          <p style={{ fontSize: '26px' }}>{t('footer.name')}</p>
        </div>
      </div>
      <div className="footer__contacts">
        <a href="tel:+380661009920">+38 066 100 9920 </a>
        <a href="mailto:dmutrosablin@gmail.com">dmutrosablin@gmail.com</a>
        <a href="https://t.me/SDmutro" target="_blank">
          @SDmutro (telegram)
        </a>
      </div>
      <div className="footer__copyright">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.tools')}</p>
        <p>
          <a
            href="https://www.linkedin.com/in/vladyslav-zinchenko-67414a205/"
            target="_blank"
          >
            {t('footer.developer')}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
