import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import panorama from '../../../assets/img/panorama.png';
import Lang from '../../common/Lang/Lang';
import ScrollDown from '../../common/ScrollDown/ScrollDown';
import './Hero.scss';

const Hero: FC = () => {
  const introduceRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from(introduceRef.current, {
      x: '-100%',
      duration: 2,
      ease: 'power3.out',
    });
    gsap.to(introduceRef.current, {
      x: 0,
      duration: 2,
      ease: 'power3.out',
    });
    gsap.from('.hero__avatar-img--panorama', {
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 2,
    });
    gsap.to('.hero__avatar-img--panorama', {
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      delay: 2,
    });
    gsap.from('.hero__introduce-title', {
      y: '100%',
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 4,
    });
    gsap.to('.hero__introduce-title', {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      delay: 4,
    });
    gsap.from('.hero__introduce-subtitle', {
      y: '100%',
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 4,
    });
    gsap.to('.hero__introduce-subtitle', {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      delay: 4,
    });
    gsap.from('.scroll-icon', { opacity: 0 });
    gsap.to('.scroll-icon', { opacity: 1, delay: 5, duration: 1 });
    gsap.from('.burger-icon', { opacity: 0 });
    gsap.to('.burger-icon', { opacity: 1, delay: 5, duration: 1 });
    gsap.from('.lang', { opacity: 0 });
    gsap.to('.lang', { opacity: 1, delay: 5, duration: 1 });
  }, []);

  return (
    <section className="hero">
      <Lang />
      <div ref={introduceRef} className="hero__introduce">
        <h1 className="hero__introduce-title">{t('hero.title')}</h1>
        <h2 className="hero__introduce-subtitle">{t('hero.subtitle')}</h2>
        <ScrollDown />
      </div>
      <img
        className="hero__background-image"
        src={panorama}
        alt="panorama"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
