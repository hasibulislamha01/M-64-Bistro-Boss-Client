import { SwiperSlide } from "swiper/react";
import { Swiper  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../assets/images/home/slide1.jpg'
import img2 from '../assets/images/home/slide2.jpg'
import img3 from '../assets/images/home/slide3.jpg'
import img4 from '../assets/images/home/slide4.jpg'
import img5 from '../assets/images/home/slide5.jpg'


const SwiperCarousel = () => {
    return (
        <>
            <Swiper
                
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperCarousel;