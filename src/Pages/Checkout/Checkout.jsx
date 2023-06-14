import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../../components/Utils/CheckoutForm/CheckoutForm';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';

const stripePromise = loadStripe(import.meta.env.VITE_PAY_PUBLISH_KEY);
const Checkout = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [course, setCourse] = useState(null);
    const { id } = useParams();

    // Get the selected price
    useEffect(() => {
        axios.get(`http://localhost:5000/selectedClass/${id}`)
            .then(res => setCourse(res.data))
    }, [id])

    //Secure Axios 
    const axiosSecure = useAxiosSecure();
    const price = course !== null && course && course.price;
    // Create Payment Intent and Get The Client Secret from stripe console.log("Payment Intent",res.data.clientSecret)
    useEffect(() => {
        axiosSecure.post('/create_payment_intent', { price: price })
            .then(res => {
                const clientSecret = res.data.clientSecret;
                setClientSecret(clientSecret);
            })
    }, [axiosSecure, course, id]);
    return (
        <div className='py-16 px-10'>
            <SectionHeading heading='Pay With Stripe'></SectionHeading>
            {
                clientSecret ?
                    <Elements stripe={stripePromise}>
                        <CheckoutForm courseId={id} clientSecret={clientSecret} />
                    </Elements>
                    :
                    <div className='text-center'>
                        <p><span className="loading loading-infinity loading-lg"></span></p>
                    </div>
            }
        </div>
    );
};

export default Checkout;