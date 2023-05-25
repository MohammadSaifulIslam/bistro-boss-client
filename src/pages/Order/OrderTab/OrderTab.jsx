

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import FoodCard from "../../Shared/Card/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    const totalPage = Math.ceil(items.length / 6);
    const pageNumbers = [...Array(totalPage).keys()]
    console.log({ pageNumbers })
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    pageNumbers.map((page, index) =>
                        <SwiperSlide
                            key={index}>
                            <div className='grid grid-cols-3 gap-6 mt-10'>
                                {
                                    items.map(food => <FoodCard
                                        key={food._id}
                                        food={food}
                                    ></FoodCard>)
                                }
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default OrderTab;