import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import panorama from '../../../assets/img/panorama-black-white.png';
import Lang from '../../common/Lang/Lang';
import './Hero.scss';

const Hero = () => {
  const introduceRef = useRef(null);

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
  }, []);

  return (
    <section className="hero">
      <Lang />
      <div ref={introduceRef} className="hero__introduce">
        <h1 className="hero__introduce-title">Hi, I am Dmytro Sublin</h1>
        <h2 className="hero__introduce-subtitle">a construction engineer</h2>
      </div>
      <img
        className="hero__avatar-img--panorama"
        src={panorama}
        alt="panorama"
      />
    </section>
  );
};

export default Hero;
