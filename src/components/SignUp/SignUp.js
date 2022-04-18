import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleAuthentication from '../GoogleAuthentication/GoogleAuthentication';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // user sign up
    const handleSignUp = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    }

    // sign up with google


    if (loading) {
        return <Loading></Loading>
    }

    // after signup redirect to login
    if (user) {
        navigate('/signin');
    }

    return (
        <div>
            <h3 className='text-center mt-5 text-primary'>Sign Up Here</h3>
            <Form onSubmit={handleSignUp} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            <GoogleAuthentication></GoogleAuthentication>

            <div>
                <hr className='w-50 mx-auto mt-5' />
                <p className='text-center'>
                    Already Have an Account? <Link className="form-link" to="/signin">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;