// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

// import required modules
import { FreeMode, Pagination } from "swiper";

const FoodCategory = () => {
    return (
        <section className="my-container my-20">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" className="object-contain" />
                    <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white text-3xl">Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className="absolute bottom-10 left-1/2 -translate-x-1/2  text-center text-white text-3xl">Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className=" absolute bottom-10 left-1/2 -translate-x-1/2  text-center text-white text-3xl">Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className=" absolute bottom-10 left-1/2 -translate-x-1/2  text-center text-white text-3xl">Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className=" absolute bottom-10 left-1/2 -translate-x-1/2  text-center text-white text-3xl">Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default FoodCategory;