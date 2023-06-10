import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import gIcon from '/g.png'
import axios from 'axios';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const destination = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                const newUser = {name: user.displayName, email: user.email};
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => alert('Unable to save user while google login'));
                alert("Google Login Successful");
            })
            .catch(error => alert(`Social Login is not working. Error: ${error.message}`));
    }
    return (
        <button onClick={handleGoogleLogin}>
            <img className='w-[40px]' src={gIcon} alt="" />
        </button>
    );
};

export default SocialLogin;