import gsap from 'gsap';

import { useRef, useEffect, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useBreakpoints } from '../../../hooks/useBreakpoints';

import ButtonMain from '../../common/ButtonMain/ButtonMain';
import teamwork from '../../../assets/img/workers.png';
import TitleSection from '../../common/TitleSection/TitleSection';
import fileUrl from '../../../assets/Dmytro Sublin CV.pdf';

import './Experience.scss';

const Experience: FC = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoints();
  const { t } = useTranslation();

  const experienceData = [
    {
      period: t('archiline.period'),
      position: t('archiline.position'),
      company: t('archiline.company'),
      description: t('archiline.desc'),
    },
    {
      period: t('agrosoyuz1.period'),
      position: t('agrosoyuz1.position'),
      company: t('agrosoyuz1.company'),
      description: t('agrosoyuz1.desc'),
    },
    {
      period: t('agrosoyuz2.period'),
      position: t('agrosoyuz2.position'),
      company: t('agrosoyuz2.company'),
      description: t('agrosoyuz2.desc'),
    },
    {
      period: t('fort.period'),
      position: t('fort.position'),
      company: t('fort.company'),
      description: t('fort.desc'),
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const experienceElement = experienceRef.current;

      if (experienceElement) {
        const rect = experienceElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('#experience-title', { x: 0, opacity: 1, duration: 1 });
          gsap.to('.experience__works', {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1,
          });
          gsap.to('.experience__content-img', {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1,
          });
        } else {
          gsap.to('#experience-title', { x: '100%', opacity: 0, duration: 1 });
          gsap.to('.experience__works', {
            x: '-100%',
            opacity: 1,
            duration: 1,
            delay: 1,
          });
          gsap.to('.experience__content-img', {
            x: '100%',
            opacity: 1,
            duration: 1,
            delay: 1,
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
    <section ref={experienceRef} className="experience" id="experience">
      <TitleSection
        lineColor="#FDD835"
        justifyContent={isMobile ? 'center' : 'flex-end'}
        id="experience-title"
      >
        {t('experience.title')}
      </TitleSection>
      <div className="experience__content">
        <ul className="experience__works">
          {experienceData.map((item, index) => (
            <li key={index} className="experience__works-item">
              <p className="experience__works-item-period">{item.period}</p>
              <h2 className="experience__works-position">{item.position}</h2>
              <h3 className="experience__works-company">{item.company}</h3>
              <p className="experience__works-description">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <div
          className="experience__content-img"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <img src={teamwork} alt="teamwork" loading="lazy" />
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}
      >
        <ButtonMain fileUrl={fileUrl}>{t('download')}</ButtonMain>
      </div>
    </section>
  );
};

export default Experience;
