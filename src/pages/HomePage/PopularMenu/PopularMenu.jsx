import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import PopularMenuCard from "../../Shared/Card/PopularMenuCard/PopularMenuCard";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(food => food.category === 'popular');
    return (
        <section className="my-container mb-20 ">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popularMenu.map(menu => <PopularMenuCard
                        key={menu._id}
                        menu={menu}
                    ></PopularMenuCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;