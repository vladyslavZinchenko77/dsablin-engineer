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
        <SwiperSlide style={{ textAlign: 'center' }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ textAlign: 'center' }}>
          <img src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <ButtonMain>download portfolio</ButtonMain>
      </div>
    </section>
  );
};

export default Portfolio;
