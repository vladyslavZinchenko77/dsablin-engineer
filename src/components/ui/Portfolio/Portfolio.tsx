// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
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
  return (
    <section className="portfolio" id="portfolio">
      <TitleSection textAlign="right">Portfolio</TitleSection>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
        <ButtonMain>download portfolio</ButtonMain>
      </div>
    </section>
  );
};

export default Portfolio;
