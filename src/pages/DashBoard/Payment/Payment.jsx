import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_PK);
const Payment = () => {
    return (
        <div className="px-5 md:w-11/12 mx-auto py-10">
            <SectionTitle subHeading={'Hurry up Make a'} heading={'Payment'}></SectionTitle>
           <div className="md:w-1/2">
           <Elements stripe={stripePromise}>
                <CheckoutFrom />
            </Elements>
           </div>
        </div>
    );
};

export default Payment;