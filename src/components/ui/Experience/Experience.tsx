import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import teamwork from '../../../assets/img/workers.png';
import TitleSection from '../../common/TitleSection/TitleSection';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import './Experience.scss';

const experienceData = [
  {
    period: 'Jun 2016 - Present',
    position: 'Chief Design Engineer.',
    company: 'Archline-2000 LLC',
    description:
      'Development of sections of reinforced concrete structures, structural and erection, architectural networks',
  },
  {
    period: 'Aug 2013 - Jul 2013',
    position: 'Chief Design Engineer.',
    company: '"PMTO "Agrosoyuz"',
    description:
      'Development of sections of reinforced concrete structures, structural and erection, architectural networks',
  },
  {
    period: 'Jun 2012 - Aug 2013',
    position: 'Lead Design Engineer.',
    company: '"PMTO "Agrosoyuz"',
    description:
      'Implementation of processes for developing project documentation, technical calculations, and construction aimed at creating reinforced concrete structures (RCS), taking into account structural and installation aspects (SA)',
  },
  {
    period: 'Aug 2007 - Jun 2012',
    position: 'Design Engineer.',
    company: 'PNPP "Fort"',
    description:
      'Development, calculation, and construction of reinforced concrete structures (RCS), taking into account structural and installation aspects (SA)',
  },
];

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoints();

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
        Work experience
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
          <img src={teamwork} alt="teamwork" />
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}
      >
        <ButtonMain>download cv</ButtonMain>
      </div>
    </section>
  );
};

export default Experience;
