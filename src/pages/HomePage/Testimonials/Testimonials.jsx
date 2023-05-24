import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { FaQuoteLeft } from "react-icons/fa";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-container my-20 ">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'Testimonials'}
            >
            </SectionTitle>

            <div className="text-center">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="px-10 md:px-20 ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className="mx-auto"
                                />
                                <FaQuoteLeft className="text-6xl mx-auto mt-10" />
                                <p className="text-xl mt-10">{review.details}</p>
                                <h4 className="text-secondary text-3xl font-medium">{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;