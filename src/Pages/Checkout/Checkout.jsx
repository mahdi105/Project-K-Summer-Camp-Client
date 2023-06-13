import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../../components/Utils/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAY_PUBLISH_KEY);
const Checkout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Checkout;