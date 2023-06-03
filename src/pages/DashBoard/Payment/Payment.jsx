import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price,0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="px-5 md:w-11/12 mx-auto py-10">
            <SectionTitle subHeading={'Hurry up Make a'} heading={'Payment'}></SectionTitle>
           <div className="md:w-1/2">
           <Elements stripe={stripePromise}>
                <CheckoutFrom price={price} cart={cart} />
            </Elements>
           </div>
        </div>
    );
};

export default Payment;