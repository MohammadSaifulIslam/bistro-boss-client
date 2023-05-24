import PopularMenuCard from "../../Shared/Card/PopularMenuCard/PopularMenuCard";

const MenuCategory = ({ items }) => {
    return (
        <section className="my-container">
            <div className="grid md:grid-cols-2 gap-5">
                {
                    items.map(menu => <PopularMenuCard
                        key={menu._id}
                        menu={menu}
                    ></PopularMenuCard>)
                }
            </div>
            <div className="text-center">
                <button className="outline-btn">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default MenuCategory;