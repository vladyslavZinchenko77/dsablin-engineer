import arrow from '../../../assets/img/arrow.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__connect">
        <img src={arrow} alt="arrow" />
        <div className="footer__connect-text">
          <p>Connect with me </p>
          <p style={{ fontSize: '26px' }}>Dmytro Sublin.</p>
        </div>
      </div>
      <div className="footer__contacts">
        <a href="tel:+380661009920">+38 066 100 9920 (telegram/viber)</a>
        <a href="mailto:dmutrosablin@gmail.com">dmutrosablin@gmail.com</a>
        <a href="facebook.com"></a>
      </div>
      <div className="footer__copyright">
        <p>© 2023 Dmytro Sublin engineer</p>
        <p>Design and develop in React, Vite, Scss and GSAP</p>
        <p>
          by{' '}
          <a
            href="https://www.linkedin.com/in/vladyslav-zinchenko-67414a205/"
            target="_blank"
          >
            Vlad Zinchenko
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
