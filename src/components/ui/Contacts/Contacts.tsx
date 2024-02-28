import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../common/Button/Button';
import Plane from '../../common/Plane/Plane';
import axios from 'axios'; // Импорт axios для отправки запросов

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    const formData = new FormData(event.currentTarget); // Получаем данные формы

    try {
      // Отправляем данные на сервер Node.js
      const response = await axios.post(
        'http://localhost:3001/sendMessage',
        formData
      );

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <section ref={contactsRef} className="contacts" id="contact">
      <h2 className="contacts__title">
        {t('contacts.title')} <br /> {t('contacts.subtitle')}
      </h2>

      <div className="contacts__form-wrap">
        <form
          className="contacts__form"
          onSubmit={handleSubmit} // Вызываем функцию handleSubmit при отправке формы
        >
          <input
            className="contacts__input"
            required
            name="name"
            placeholder="Your name"
            type="text"
          />
          <input
            className="contacts__input"
            required
            name="lastName"
            placeholder="Your last name"
            type="text"
          />

          <input
            className="contacts__input"
            required
            name="email"
            placeholder="example@gmail.com"
            type="text"
          />
          <input
            className="contacts__input"
            required
            name="phoneNumber"
            placeholder="+38 099 9999 999"
            type="text"
          />
          <textarea
            style={{ maxWidth: '100%', minWidth: '100%', maxHeight: 200 }}
            className="contacts__input"
            required
            placeholder="Text your message"
            name="message"
          />
          <div className="contacts__form-btn--wrap">
            <Button type="submit" isBlack={true}>
              Send
            </Button>
          </div>
        </form>
      </div>
      <Plane />
    </section>
  );
};

export default Contacts;
