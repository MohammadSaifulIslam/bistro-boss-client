import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-container mb-20 ">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                   {
                    reviews.map(review =>  <SwiperSlide
                    key={review._id}
                    >
                        <p>{review.details}</p>
                        <h4 className="text-secondary ">{review.name}</h4>
                 </SwiperSlide>)
                   }
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;