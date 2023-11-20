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
import Card from '../../common/Card/Card';
import img1 from '../../../assets/portfolio/virovskogo.jpg';
import img2 from '../../../assets/portfolio/bashnya1.jpeg';
import img3 from '../../../assets/portfolio/tcnap.jpg';
import img4 from '../../../assets/portfolio/richport.jpeg';

import './Portfolio.scss';

const mainWorks = [img1, img2, img3, img4];

const cardData = [
  { img: img1, description: 'вировское_рабочая башня' },
  { img: img2, description: 'kombikorm' },
  { img: img3, description: 'ЦНАП у м.Бахмут, Донецької обл' },
  { img: img4, description: 'Річковий порт' },
];

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
        {mainWorks.map((work) => {
          return (
            <SwiperSlide style={{ textAlign: 'center' }}>
              <img src={work} alt="img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <ButtonMain>more works</ButtonMain>
      </div>
      <div className="portfolio__works">
        {cardData.map((card) => {
          return <Card img={card.img} description={card.description} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
