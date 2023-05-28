import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider/AuthProvider";

const FoodCard = ({ food }) => {
    const { user } = useContext(AuthContext)
    const { image, name, price, recipe ,_id} = food;
    const navigate = useNavigate()
    const location = useLocation();

    const handleAddtoCart = (food) => {
        if (user && user.email) {
            const cartItem = {userEmail: user.email , image, name, price, menuId: _id}
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Food added to cart')
                    }
                    console.log(data)
                })
        }
        else {
            toast('You need to login first');
            navigate('/login', {state: {from: location}});
        }
    }

    return (
        <div className="text-center relative">
            <img src={image} alt="food image" className="w-full object-contain" />
            <p className="absolute top-5 right-5 bg-slate-900 py-1 px-3 text-white font-semibold">{price}</p>
            <div className="py-8 px-10 bg-slate-50">
                <h4 className="text-2xl font-bold">{name}</h4>
                <p className="mb-5 text-gray-600">{recipe}</p>
                <button onClick={() => handleAddtoCart(food)} className="btn">Add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;