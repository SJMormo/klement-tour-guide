import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/google-logo.png';
import Loading from '../Loading/Loading';


const SignIn = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <Loading></Loading>
    }

    // after login redirect to home
    if (user) {
        navigate('/home');
    }


    return (
        <div>
            <h3 className='text-center mt-5'>Sign In Here</h3>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>

            <div className='mt-3 d-flex justify-content-center'>
                <div className='w-25 px-4'>
                    <hr />
                </div>
                <p>or</p>
                <div className='w-25 px-4'>
                    <hr />
                </div>
            </div>
            <Button className='w-25 d-block mx-auto border' variant="light" type="submit">
                <img src={googleIcon} alt="" />
                <span className='ms-2'>Continue With Google</span>
            </Button>
            <div>
                <hr className='w-50 mx-auto mt-5' />
                <p className='text-center'>
                    Don't Have an Account? <Link className="form-link" to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;