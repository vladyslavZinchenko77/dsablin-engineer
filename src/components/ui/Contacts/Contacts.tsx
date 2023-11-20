import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import plain from '../../../assets/img/plane.svg';

import './Contacts.scss';

const Contacts = () => {
  const contactsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contactsElement = contactsRef.current;

      if (contactsElement) {
        const rect = contactsElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('.footer', { y: 0, duration: 1, delay: 2 });
        } else {
          gsap.to('.footer', { y: '-100%', duration: 1, delay: 2 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={contactsRef} className="contacts" id="contact">
      <h2 className="contacts__title">
        More information? <br /> Contact me.
      </h2>
      <img src={plain} alt="plain" />
    </section>
  );
};

export default Contacts;
