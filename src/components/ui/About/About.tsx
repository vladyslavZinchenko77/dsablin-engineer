import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import avatar from '../../../assets/img/avatar.jpg';
import TitleSection from '../../common/TitleSection/TitleSection';
import './About.scss';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

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
      <TitleSection id="about-title" textAlign="left">
        About me
      </TitleSection>
      <div className="about__content">
        <div className="about__text-block">
          <p className="about__text-block--text">
            During my practical experience, I personally worked on, calculated,
            and designed the following structures and buildings:
          </p>
          <p className="about__text-block--text">
            Foundations: Shallow foundations, deep foundations, pile caps under
            individual supports, pile caps in the form of a pile field under the
            entire structure, retaining walls (corner, massive), sheet pile
            fencing, slab structures on natural foundation and on a soil
            cushion, strip foundations, foundations for equipment.
          </p>
          <p className="about__text-block--text">
            Reinforced concrete structures: Monolithic residential buildings,
            foundations of almost all types, coverings, floor slabs, retaining
            walls, working towers.
          </p>
          <p className="about__text-block--text">
            Metal structures: Racks, warehouses, hangars, canopies, galleries,
            platforms for equipment, working towers, bunkers, administrative
            buildings, service station buildings, car showrooms.
          </p>
          <p className="about__text-block--text">
            Light-gauge steel structures: Hangars, warehouses, a 4-story
            administrative building, an extension above a brick building.
          </p>
          <p className="about__text-block--text">
            Reinforcement of metal and reinforced concrete structures:
            Reinforced concrete beams and slab covers, steel beams, columns,
            trusses, opening formation in reinforced concrete and brick
            buildings, reinforcement of shallow foundations and strip
            foundations.
          </p>
        </div>
        <div className="about__photo-block">
          <img className="about__photo" src={avatar} alt="photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
