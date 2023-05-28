import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
           <h3>Total items {cart.length}</h3>
        </div>
    );
};

export default MyCart;