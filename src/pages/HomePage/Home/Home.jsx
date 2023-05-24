import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import FoodCategory from "../FoodCategory/FoodCategory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FoodCategory/>
            <PopularMenu/>
            <FeaturedFood/>
            <Testimonials/>
        </div>
    );
};

export default Home;