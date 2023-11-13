import panorama from '../../../assets/img/panorama-black-white.png';
import Lang from '../../common/Lang/Lang';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <Lang />
      <div className="hero__introduce">
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
