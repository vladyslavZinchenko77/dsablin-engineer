import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Lang.scss';

const Lang = () => {
  const [activeLang, setActiveLang] = useState('en');
  const { i18n } = useTranslation();

  const handleLangClick = (lang: string) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="lang">
      <button
        className={`lang__button ${activeLang === 'en' ? 'active' : ''}`}
        onClick={() => handleLangClick('en')}
      >
        En
      </button>
      <button
        className={`lang__button ${activeLang === 'ua' ? 'active' : ''}`}
        onClick={() => handleLangClick('ua')}
      >
        Ua
      </button>
      <button
        className={`lang__button ${activeLang === 'ru' ? 'active' : ''}`}
        onClick={() => handleLangClick('ru')}
      >
        Ru
      </button>
    </div>
  );
};

export default Lang;
