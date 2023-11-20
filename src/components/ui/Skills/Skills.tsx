import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import autocad from '../../../assets/expierence-icons/autocad.jpg';
import max from '../../../assets/expierence-icons/max.jpg';
import office from '../../../assets/expierence-icons/office.jpg';
import photoshop from '../../../assets/expierence-icons/photoshop.jpg';
import avk from '../../../assets/expierence-icons/avk.jpg';
import lira from '../../../assets/expierence-icons/lira.jpg';
import TitleSection from '../../common/TitleSection/TitleSection';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import './Skills.scss';

const skillsData = [
  { src: autocad, title: 'AutoCAD' },
  { src: max, title: 'Autodesk 3ds Max' },
  { src: office, title: 'MS Office' },
  { src: photoshop, title: 'Adobe Photoshop' },
  { src: avk, title: 'АВК' },
  { src: lira, title: 'ПК Лира' },
  { src: lira, title: 'Мономах' },
  { src: lira, title: 'SCAD' },
];

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoints();

  useEffect(() => {
    const handleScroll = () => {
      const skillsElement = skillsRef.current;

      if (skillsElement) {
        const rect = skillsElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('#skills-title', { x: 0, opacity: 1, duration: 1 });
          gsap.to('.skills__list', { opacity: 1, duration: 1, delay: 1 });
        } else {
          gsap.to('#skills-title', { x: '-100%', opacity: 0, duration: 1 });
          gsap.to('.skills__list', { opacity: 0, duration: 1, delay: 1 });
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
    <section ref={skillsRef} className="skills" id="skills">
      <TitleSection textAlign={isMobile ? 'center' : 'left'} id="skills-title">
        Skills
      </TitleSection>
      <ul className="skills__list">
        {skillsData.map((item, index) => (
          <li key={index} className="skills__list-item">
            <img
              className="skills__list-item--img"
              src={item.src}
              alt={item.title}
            />
            <p className="skills__list-item--title">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
