import FoodCard from "../../Shared/Card/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-3 gap-6 mt-10'>
            {
                items.map(food => <FoodCard
                    key={food._id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;