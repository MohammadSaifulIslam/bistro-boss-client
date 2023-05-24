import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import foodImage from '../../../assets/home/featured.jpg';
const FeaturedFood = () => {
    return (
        <section className={`relative bg-fixed object-cover bg-center py-20 text-white z-10`} style={{ backgroundImage: `url(${foodImage})` }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black w-full h-full -z-10  bg-opacity-40"></div>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="my-container grid md:grid-cols-2 gap-5">
                <div>
                    <img src={foodImage} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                    <h6 className="text-2xl">March 20, 2023</h6>
                    <h4 className="uppercase text-2xl mb-5">WHERE CAN I GET SOME?</h4>
                    <p>Introducing Bistro Boss' featured food: the "Boss Signature Delight." This exceptional dish combines a perfectly seared prime ribeye steak seasoned with exotic spices, accompanied by roasted seasonal vegetables and a velvety red wine reduction sauce. Served with creamy mashed potatoes, it strikes a harmonious balance between sophistication and comfort. Prepare to be captivated by this culinary masterpiece.</p>
                    <button className="btn btn-outline btn-info mt-5 w-fit">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedFood;