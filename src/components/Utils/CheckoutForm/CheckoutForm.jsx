import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './CheckoutForm.css'
import useAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CheckoutForm = ({ clientSecret, courseId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true);

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        // Card Payment
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: !loading && user?.displayName || 'Anonymous',
                    email: !loading && user?.email || 'Anonymous'
                },
            }
        });
        if (paymentError) {
            setCardError(paymentError.message);
            setIsLoading(false);
        }
        if (paymentIntent) {
            console.log(paymentIntent);
            setIsLoading(false);
        }
        if (paymentIntent.status === 'succeeded') {
            if (!loading && user) {
                const paymentInfo = {
                    amount: paymentIntent.amount,
                    transactionId: paymentIntent.id,
                    status: paymentIntent.status,
                    classId: courseId,
                    email: user?.email
                };
                axiosSecure.post('/paymentInfo', paymentInfo)
                .then(res => console.log(res.data))
            }
        }
    };

    return (
        <form className='bg-blue-200 w-[500px] mx-auto p-5 rounded-md' onSubmit={handleSubmit}>
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
            <button className='btn btn-primary btn-sm pay-btn' type="submit" disabled={!stripe || isLoading}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;