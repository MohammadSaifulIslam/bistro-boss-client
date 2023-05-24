import orderCoverImg from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../Shared/Card/FoodCard/FoodCard';
import Cover from "../../Shared/Cover/Cover";

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const OrderHome = () => {
    const [menu] = useMenu();
    const offeredMenu = menu.filter(food => food.category === 'offered');
    const dessertMenu = menu.filter(food => food.category === 'dessert');
    const pizzaMenu = menu.filter(food => food.category === 'pizza');
    const saladMenu = menu.filter(food => food.category === 'salad');
    const soupMenu = menu.filter(food => food.category === 'soup');


    return (
        <div>
            <Cover
                img={orderCoverImg}
                title={"Order Food"}
                description={'Would you like to try a dish?'}
                heading={true}
            />

            <section className='my-container my-20'>
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                       <div className='grid grid-cols-3 gap-6 mt-10'>
                       {
                            dessertMenu.map(food => <FoodCard
                            key={food._id}
                            food={food}
                            ></FoodCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>

            </section>
        </div>
    );
};

export default OrderHome;