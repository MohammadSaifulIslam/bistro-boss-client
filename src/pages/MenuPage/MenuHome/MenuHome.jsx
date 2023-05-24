import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import websiteTitle from "../../../utility/websiteTitle";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from '../MenuCategory/MenuCategory';

// image
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const MenuHome = () => {
    // menu 
    const [menu] = useMenu();
    const offeredMenu = menu.filter(food => food.category === 'offered');
    const dessertMenu = menu.filter(food => food.category === 'dessert');
    const pizzaMenu = menu.filter(food => food.category === 'pizza');
    const saladMenu = menu.filter(food => food.category === 'salad');
    const soupMenu = menu.filter(food => food.category === 'soup');

    websiteTitle('Bistro Boss | Menu')
    return (
        <section>
            <Cover
                img={menuImg}
                title={'Our Menu'}
                description={'Would you like to try a dish?'}
                heading={true}
            ></Cover>

            <div className='my-container my-20'>
                {/* offered menu */}
                <SectionTitle
                    subHeading={"Don't Miss"}
                    heading={"Today's Offer"}
                >
                </SectionTitle>
                <MenuCategory
                    items={offeredMenu}
                ></MenuCategory>
            </div>

            {/* dessert menu */}
            <Cover
                img={dessertImg}
                title={'DESSERTS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                heading={false}
            ></Cover>
            <div className='my-container my-20'>
                <MenuCategory
                    items={dessertMenu.slice(0, 6)}
                ></MenuCategory>
            </div>


            {/* pizza menu */}
            <Cover
                img={pizzaImg}
                title={'Pizza'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                heading={false}
            ></Cover>
            <div className='my-container my-20'>
                <MenuCategory
                    items={pizzaMenu.slice(0, 6)}
                ></MenuCategory>
            </div>

            {/* salad menu */}
            <Cover
                img={saladImg}
                title={'Salad'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                heading={false}
            ></Cover>
            <div className='my-container my-20'>
                <MenuCategory
                    items={saladMenu.slice(0, 6)}
                ></MenuCategory>
            </div>

            {/* soup menu */}
            <Cover
                img={soupImg}
                title={'Soup'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                heading={false}
            ></Cover>
            <div className='my-container my-20'>
                <MenuCategory
                    items={soupMenu.slice(0, 6)}
                ></MenuCategory>
            </div>

        </section>
    );
};

export default MenuHome;