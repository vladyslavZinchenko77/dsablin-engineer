import gsap from 'gsap';
import { useEffect, useRef, useState, FC } from 'react';
import { useBreakpoints } from '../../../hooks/useBreakpoints';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ButtonMain from '../../common/ButtonMain/ButtonMain';
import TitleSection from '../../common/TitleSection/TitleSection';
import Card from '../../common/Card/Card';

import img1 from '../../../assets/portfolio/virovskogo.jpg';
import img2 from '../../../assets/portfolio/bashnya1.jpeg';
import img3 from '../../../assets/portfolio/tcnap.jpg';
import img4 from '../../../assets/portfolio/richport.jpeg';

import bakhmutImg1 from '../../../assets/portfolio/tcnap/1.jpg';
import bakhmutImg2 from '../../../assets/portfolio/tcnap/2.jpg';
import bakhmutImg3 from '../../../assets/portfolio/tcnap/3.jpg';
import bakhmutImg4 from '../../../assets/portfolio/tcnap/4.jpg';
import bakhmutImg5 from '../../../assets/portfolio/tcnap/5.jpg';

import kombikornimg1 from '../../../assets/portfolio/комбикорм/1.jpg';
import kombikornimg2 from '../../../assets/portfolio/комбикорм/2.jpg';
import kombikornimg3 from '../../../assets/portfolio/комбикорм/3.jpeg';

import riverportImg1 from '../../../assets/portfolio/речпорт/1.jpg';
import riverportImg2 from '../../../assets/portfolio/речпорт/2.jpg';
import riverportImg3 from '../../../assets/portfolio/речпорт/3.jpeg';

import vyrovskogoImg1 from '../../../assets/portfolio/virovskogo/1.jpg';
import vyrovskogoImg2 from '../../../assets/portfolio/virovskogo/2.jpg';
import vyrovskogoImg3 from '../../../assets/portfolio/virovskogo/3.jpg';
import vyrovskogoImg4 from '../../../assets/portfolio/virovskogo/4.jpg';
import vyrovskogoImg5 from '../../../assets/portfolio/virovskogo/5.jpg';
import vyrovskogoImg6 from '../../../assets/portfolio/virovskogo/6.jpg';
import vyrovskogoImg7 from '../../../assets/portfolio/virovskogo/7.jpg';

import './Portfolio.scss';

const mainWorks = [img1, img2, img3, img4];
const bakhmutData = [
  bakhmutImg1,
  bakhmutImg2,
  bakhmutImg3,
  bakhmutImg4,
  bakhmutImg5,
];
const vyrovskogoData = [
  vyrovskogoImg1,
  vyrovskogoImg2,
  vyrovskogoImg3,
  vyrovskogoImg4,
  vyrovskogoImg5,
  vyrovskogoImg6,
  vyrovskogoImg7,
];

const kombikornData = [kombikornimg1, kombikornimg2, kombikornimg3];
const riverPort = [riverportImg1, riverportImg2, riverportImg3];

const cardData = [
  {
    img: img1,
    description: 'вировское_рабочая башня',
    content: vyrovskogoData,
  },
  { img: img2, description: 'kombikorm', content: kombikornData },
  {
    img: img3,
    description: 'ЦНАП у м.Бахмут, Донецької обл',
    content: bakhmutData,
  },
  { img: img4, description: 'Річковий порт', content: riverPort },
];

const Portfolio: FC = () => {
  const [carouselImg, setCarouselImg] = useState<string[]>(mainWorks);
  const [carouseTitle, setCarouselTitle] = useState<string>('');
  const [worksVisible, setWorksVisible] = useState<boolean>(false);
  const [selectCard, setSelectCard] = useState<number | null>();
  const portfolioRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoints();

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

  useEffect(() => {
    if (selectCard !== null) {
    }
  }, [selectCard]);

  useEffect(() => {
    const handleClick = () => {
      setSelectCard(null);
      setCarouselTitle('');
      setCarouselImg(mainWorks);
    };

    const portfolioElement = document.querySelector('.portfolio');
    if (portfolioElement) {
      portfolioElement.addEventListener('click', handleClick);
    }

    return () => {
      if (portfolioElement) {
        portfolioElement.removeEventListener('click', handleClick);
      }
    };
  }, []);
  return (
    <section ref={portfolioRef} className="portfolio" id="portfolio">
      <TitleSection
        color="#FDD835"
        textAlign={isMobile ? 'center' : 'right'}
        id="portfolio-title"
      >
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
        {carouselImg.map((work) => {
          return (
            <SwiperSlide style={{ textAlign: 'center' }}>
              <img src={work} alt="img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 className="portfolio__carousel-title">{carouseTitle}</h2>
      </div>
      {worksVisible && (
        <div className="portfolio__works">
          {cardData.map((card, index) => {
            return (
              <Card
                img={card.img}
                description={card.description}
                key={index}
                isSelected={index === selectCard}
                oncklick={() => {
                  setCarouselImg(card.content);
                  setCarouselTitle(card.description);
                  setSelectCard(index);
                }}
              />
            );
          })}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <ButtonMain oncklick={() => setWorksVisible(!worksVisible)}>
          {worksVisible ? 'hide works' : 'more works'}
        </ButtonMain>
      </div>
    </section>
  );
};

export default Portfolio;
