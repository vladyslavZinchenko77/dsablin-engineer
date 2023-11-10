import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__connect">
        <p>Connect with me </p>
        <p>Dmytro Sublin.</p>
      </div>
      <div className="footer__contacts">
        <a href="tel:+380661009920">+38 066 100 9920 (telegram/viber)</a>
        <a href="mailto:dmutrosablin@gmail.com">dmutrosablin@gmail.com</a>
        <a href="facebook.com"></a>
      </div>
      <div className="footer__copyright">
        <p>© 2023 Sublin Dmytro engineer</p>
        <p>Design in Figma Build in React, Tailwind</p>
        <p>CSS and Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
