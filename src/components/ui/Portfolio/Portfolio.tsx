import gsap from 'gsap';
import { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import TitleSection from '../../common/TitleSection/TitleSection';
import img1 from '../../../assets/portfolio/1.jpg';
import img6 from '../../../assets/portfolio/6.jpg';
import img7 from '../../../assets/portfolio/7.jpg';
import img8 from '../../../assets/portfolio/8.jpg';
import img9 from '../../../assets/portfolio/9.jpg';
import img10 from '../../../assets/portfolio/10.jpg';
import img11 from '../../../assets/portfolio/11.jpg';
import './Portfolio.scss';

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioElement = portfolioRef.current;

      if (portfolioElement) {
        const rect = portfolioElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('#portfolio-title', { x: 0, opacity: 1, duration: 1 });
          gsap.to('.mySwiper', { opacity: 1, duration: 1, delay: 1 });
        } else {
          gsap.to('#portfolio-title', { x: '100%', opacity: 0, duration: 1 });
          gsap.to('.mySwiper', { opacity: 0, duration: 1, delay: 1 });
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
    <section ref={portfolioRef} className="portfolio" id="portfolio">
      <TitleSection textAlign="right" id="portfolio-title">
        Portfolio
      </TitleSection>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img6} alt="img6" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img7} alt="img7" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img8} alt="img8" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img9} alt="img9" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img10} alt="img10" />
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img11} alt="img11" />
        </SwiperSlide>
      </Swiper>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <ButtonMain>more works</ButtonMain>
      </div>
      <div className="portfolio__works">
        <div className="portfolio__works-item">
          <img className="portfolio__works-item--img" src={img1} alt="img1" />
          <p className="portfolio__works-item--desc">description</p>
        </div>
        <div className="portfolio__works-item">
          <img className="portfolio__works-item--img" src={img6} alt="img6" />
          <p className="portfolio__works-item--desc">description</p>
        </div>
        <div className="portfolio__works-item">
          <img className="portfolio__works-item--img" src={img7} alt="img7" />
          <p className="portfolio__works-item--desc">description</p>
        </div>
        <div className="portfolio__works-item">
          <img className="portfolio__works-item--img" src={img8} alt="img8" />
          <p className="portfolio__works-item--desc">description</p>
        </div>
        <div className="portfolio__works-item">
          <img className="portfolio__works-item--img" src={img9} alt="img9" />
          <p className="portfolio__works-item--desc">description</p>
        </div>
        <div className="portfolio__works-item">
          <img className="portfolio__works-item--img" src={img10} alt="img10" />
          <p className="portfolio__works-item--desc">description</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
