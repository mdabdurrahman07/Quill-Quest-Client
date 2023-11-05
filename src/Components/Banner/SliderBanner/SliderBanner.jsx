// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider_img_1 from '../../../../public/assets/slider-imgs/C 1.jpg'
import slider_img_2 from '../../../../public/assets/slider-imgs/C 2.jpg'
import slider_img_3 from '../../../../public/assets/slider-imgs/C 3.jpg'
import slider_img_4 from '../../../../public/assets/slider-imgs/C 4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow,  Autoplay, Pagination } from 'swiper/modules';
const SliderBanner = () => {
    return (
        <div className='max-w-md'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }} 
        pagination={true}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider_img_1} className="w-96 h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_2} className="w-96 h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_3} className="w-96 h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_4} className="w-96 h-96" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default SliderBanner;


  