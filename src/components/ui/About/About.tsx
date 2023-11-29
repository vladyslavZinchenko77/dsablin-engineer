import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import { useTranslation } from 'react-i18next';
import avatar from '../../../assets/img/avatar.jpg';
import TitleSection from '../../common/TitleSection/TitleSection';

import './About.scss';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoints();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = aboutRef.current;

      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('#about-title', { x: 0, opacity: 1, duration: 1 });
          gsap.to('.about__text-block--text', {
            x: 0,
            opacity: 1,
            duration: 1,
          });
          gsap.to('.about__photo', { opacity: 1, duration: 2, delay: 2 });
        } else {
          gsap.to('#about-title', { x: '-100%', opacity: 0, duration: 1 });
          gsap.to('.about__text-block--text', {
            x: '-100%',
            opacity: 0,
            duration: 1,
          });
          gsap.to('.about__photo', { opacity: 0, duration: 2 });
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
    <section ref={aboutRef} className="about" id="about">
      <TitleSection
        id="about-title"
        justifyContent={isMobile ? 'center' : 'flex-start'}
      >
        {t('about.title')}
      </TitleSection>
      <div className="about__content">
        <div className="about__text-block">
          <p className="about__text-block--text">{t('about.p1')}</p>
          <p className="about__text-block--text">{t('about.p2')}</p>
          <p className="about__text-block--text">{t('about.p3')}</p>
          <p className="about__text-block--text">{t('about.p4')}</p>
          <p className="about__text-block--text">{t('about.p5')}</p>
          <p className="about__text-block--text">{t('about.p6')}</p>
        </div>
        <div className="about__photo-block">
          <img className="about__photo" src={avatar} alt="photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
