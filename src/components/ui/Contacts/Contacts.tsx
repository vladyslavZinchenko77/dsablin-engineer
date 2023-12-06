import gsap from 'gsap';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Plane from '../../common/Plane/Plane';

import './Contacts.scss';

const Contacts = () => {
  const contactsRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const contactsElement = contactsRef.current;

      if (contactsElement) {
        const rect = contactsElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('.footer', { y: 0, duration: 1, delay: 2 });
          gsap.to('.contacts__title', {
            y: '0',
            opacity: 1,
            duration: 1,
            delay: 0.5,
          });
        } else {
          gsap.to('.footer', { y: '-100%', duration: 1, delay: 2 });
          gsap.to('.contacts__title', {
            y: '100%',
            opacity: 0,
            duration: 1,
            delay: 0.5,
          });
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
        {t('contacts.title')} <br /> {t('contacts.subtitle')}
      </h2>
      <Plane />
    </section>
  );
};

export default Contacts;
