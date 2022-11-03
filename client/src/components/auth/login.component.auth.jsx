import React from 'react';
import axios from 'axios';
import { useIsAuthenticated, useSignIn } from 'react-auth-kit';
import { useNavigate, Navigate } from 'react-router-dom';
// FIXME CHECK STACKOVERFLOW TO FIX AN ERROR
const SignInComponent = () => {
    const isAuthenticated = useIsAuthenticated();
    const signIn = useSignIn();
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({ login: '', password: '' });
    async function onSubmit(e) {
        e.preventDefault();
        axios
            .post('http://localhost:3030/api/auth/login', formData)
            .then((res) => {
                if (res.status === 200) {
                    if (
                        signIn({
                            token: res.data.token,
                            expiresIn: res.data.expiresIn,
                            tokenType: 'Bearer',
                            authState: res.data.authUserState,
                        })
                    ) {
                        // navigate("/profile")
                        console.log('logged in');
                    } else {
                        //Throw error
                    }
                } else {
                    console.log('status 500');
                }
            });
    }
    if (isAuthenticated()) {
        // If authenticated user, then redirect to his profile
        return <Navigate to={'/profile'} replace />;
    } else {
        return (
            <form onSubmit={onSubmit} className='flex flex-col w-96 p-2'>
                <input
                    className='text-black mt-2'
                    type={'login'}
                    onChange={(e) =>
                        setFormData({ ...formData, login: e.target.value })
                    }
                />
                <input
                    className='text-black mt-2'
                    type={'password'}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />

                <button type='submit'>Submit</button>
            </form>
        );
    }
};

export default SignInComponent;
