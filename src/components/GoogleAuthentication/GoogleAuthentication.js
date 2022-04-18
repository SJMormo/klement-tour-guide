import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/google-logo.png';
import Loading from '../Loading/Loading';


const GoogleAuthentication = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleLoading) {
        return <Loading></Loading>
    }
    // after signup redirect to login
    if (googleUser) {
        navigate('/signin');
    }
    return (
        <div>
            <div className='mt-3 d-flex justify-content-center'>
                <div className='w-25 px-4'>
                    <hr />
                </div>
                <p>or</p>
                <div className='w-25 px-4'>
                    <hr />
                </div>
            </div>
            <Button onClick={() => signInWithGoogle()} className='w-25 d-block mx-auto border' variant="light" type="submit">
                <img src={googleIcon} alt="" />
                <span className='ms-2'>Sign Up With Google</span>
            </Button>
        </div>
    );
};

export default GoogleAuthentication;