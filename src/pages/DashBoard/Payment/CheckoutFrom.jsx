import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const CheckoutFrom = ({ price }) => {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const {user} = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState('');


  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })

  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      setError(null)
      // console.log('[PaymentMethod]', paymentMethod);
    }
setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown'
          },
        },
      },
    );

    if(confirmError){
      console.log(confirmError)
    }
    setProcessing(false)
    console.log(paymentIntent)
    if(paymentIntent.status === "succeeded"){
      setTransectionId(paymentIntent.id)
      // TODO: next step
      console.log('success', paymentIntent)
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="my-btn mt-5" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className="text-red-600 mt-4">{error}</p>
      {
        transectionId && <p className="text-success">Payment success. Your transection id id {transectionId}</p>
      }
    </>
  );
};

export default CheckoutFrom;