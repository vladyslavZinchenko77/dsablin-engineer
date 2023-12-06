import gsap from 'gsap';
import { useEffect, useRef, useState, FC } from 'react';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TitleSection from '../../common/TitleSection/TitleSection';
import Card from '../../common/Card/Card';

import img1 from '../../../assets/portfolio/virovskogo.jpg';
import img2 from '../../../assets/portfolio/bashnya1.jpeg';
import img3 from '../../../assets/portfolio/tcnap.jpg';
import img4 from '../../../assets/portfolio/richport.jpeg';
import img5 from '../../../../src/assets/portfolio/silos.jpg';
import img6 from '../../../../src/assets/portfolio/avtopriem.jpg';

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

import silosImg1 from '../../../assets/portfolio/к_силоса хранения/1.jpg';
import silosImg2 from '../../../assets/portfolio/к_силоса хранения/2.jpg';
import silosImg3 from '../../../assets/portfolio/к_силоса хранения/3.jpg';
import silosImg4 from '../../../assets/portfolio/к_силоса хранения/4.jpg';
import silosImg5 from '../../../assets/portfolio/к_силоса хранения/5.jpg';
import silosImg6 from '../../../assets/portfolio/к_силоса хранения/6.jpg';
import silosImg7 from '../../../assets/portfolio/к_силоса хранения/7.jpg';
import silosImg8 from '../../../assets/portfolio/к_силоса хранения/8.jpg';

import avtopriemImg1 from '../../../assets/portfolio/кап_автоприем/1.jpg';
import avtopriemImg2 from '../../../assets/portfolio/кап_автоприем/2.jpeg';
import avtopriemImg3 from '../../../assets/portfolio/кап_автоприем/3.jpeg';
import avtopriemImg4 from '../../../assets/portfolio/кап_автоприем/4.jpeg';
import avtopriemImg5 from '../../../assets/portfolio/кап_автоприем/5.jpeg';
import avtopriemImg6 from '../../../assets/portfolio/кап_автоприем/6.jpeg';
import avtopriemImg7 from '../../../assets/portfolio/кап_автоприем/7.jpeg';
import avtopriemImg8 from '../../../assets/portfolio/кап_автоприем/8.jpeg';
import avtopriemImg9 from '../../../assets/portfolio/кап_автоприем/9.jpg';
import avtopriemImg10 from '../../../assets/portfolio/кап_автоприем/10.jpg';

import './Portfolio.scss';

const mainWorks = [img1, img2, img3, img4, img5];

const cardData = [
  {
    img: img1,
    description: 'вировское_рабочая башня',
    content: [
      vyrovskogoImg1,
      vyrovskogoImg2,
      vyrovskogoImg3,
      vyrovskogoImg4,
      vyrovskogoImg5,
      vyrovskogoImg6,
      vyrovskogoImg7,
    ],
  },
  {
    img: img2,
    description: 'kombikorm',
    content: [kombikornimg1, kombikornimg2, kombikornimg3],
  },
  {
    img: img3,
    description: 'ЦНАП у м.Бахмут, Донецької обл',
    content: [bakhmutImg1, bakhmutImg2, bakhmutImg3, bakhmutImg4, bakhmutImg5],
  },
  {
    img: img4,
    description: 'Річковий порт',
    content: [riverportImg1, riverportImg2, riverportImg3],
  },
  {
    img: img5,
    description: 'Силос',
    content: [
      silosImg1,
      silosImg2,
      silosImg3,
      silosImg4,
      silosImg5,
      silosImg6,
      silosImg7,
      silosImg8,
    ],
  },
  {
    img: img6,
    description: 'автоприем',
    content: [
      avtopriemImg1,
      avtopriemImg2,
      avtopriemImg3,
      avtopriemImg4,
      avtopriemImg5,
      avtopriemImg6,
      avtopriemImg7,
      avtopriemImg8,
      avtopriemImg9,
      avtopriemImg10,
    ],
  },
];

const Portfolio: FC = () => {
  const [carouselImg, setCarouselImg] = useState<string[]>(mainWorks);
  const [carouseTitle, setCarouselTitle] = useState<string>('');
  const [selectCard, setSelectCard] = useState<number | null>();
  const portfolioRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useBreakpoints();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const portfolioElement = portfolioRef.current;
      const worksElement = worksRef.current;
      const tl = gsap.timeline({ defaults: { duration: 0.5 } });

      if (portfolioElement) {
        const rect = portfolioElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          gsap.to('#portfolio-title', {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1,
          });
          gsap.to('.mySwiper', { opacity: 1, duration: 1, delay: 2 });
        } else {
          gsap.to('#portfolio-title', {
            x: '100%',
            opacity: 0,
            duration: 1,
            delay: 1,
          });
          gsap.to('.mySwiper', { opacity: 0, duration: 1, delay: 2 });
        }
      }

      if (worksElement) {
        const rect = worksElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          document.querySelectorAll('.card').forEach((card) => {
            tl.to(card, { opacity: 1, delay: 0.1 }, '+=0.1');
          });
        } else {
          document.querySelectorAll('.card').forEach((card) => {
            tl.to(card, { opacity: 0, delay: 0.1 }, '+=0.1');
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

  useEffect(() => {
    if (selectCard !== null) {
    }
  }, [selectCard]);

  return (
    <section ref={portfolioRef} className="portfolio" id="portfolio">
      <TitleSection
        color="#FDD835"
        lineColor="#FDD835"
        id="portfolio-title"
        justifyContent={isMobile ? 'center' : 'flex-end'}
      >
        {t('portfolio.title')}
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
              <img src={work} alt="img" loading="lazy" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 className="portfolio__carousel-title">{carouseTitle}</h2>
      </div>

      <div className="portfolio__works" ref={worksRef}>
        {cardData.map((card, index) => {
          return (
            <Card
              img={card.img}
              description={card.description}
              key={index}
              isSelected={index === selectCard}
              onСlick={() => {
                setCarouselImg([...card.content]);
                setCarouselTitle(card.description);
                setSelectCard(index);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
