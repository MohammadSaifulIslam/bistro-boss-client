import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/useMenu';
import Cover from "../../Shared/Cover/Cover";

import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';


const OrderHome = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert'];
    const { category } = useParams();
    const initialIndext = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndext);



    const [menu] = useMenu();
    const saladMenu = menu.filter(food => food.category === 'salad');
    const pizzaMenu = menu.filter(food => food.category === 'pizza');
    const soupMenu = menu.filter(food => food.category === 'soup');
    const dessertMenu = menu.filter(food => food.category === 'dessert');
    const drinksMenu = menu.filter(food => food.category === 'drinks');


    return (
        <div>
            <Cover
                img={orderCoverImg}
                title={"Order Food"}
                description={'Would you like to try a dish?'}
                heading={true}
            />

            <section className='my-container my-20'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab
                            items={saladMenu}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={pizzaMenu}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={soupMenu}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={dessertMenu}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={drinksMenu}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>

            </section>
        </div>
    );
};

export default OrderHome;