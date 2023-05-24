import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenuCard from "../../Shared/Card/PopularMenuCard/PopularMenuCard";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularMenu = data.filter(menu => menu.category === 'popular')
            setMenu(popularMenu)
        })
    },[])
    return (
        <section className="my-container mb-20 ">
             <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-5"> 
                {
                    menu.map(menu => <PopularMenuCard
                    key={menu._id}
                    menu={menu}
                    ></PopularMenuCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;