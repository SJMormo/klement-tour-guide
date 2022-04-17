import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import googleIcon from '../../images/google-logo.png';


const SignIn = () => {


    return (
        <div>
            <h3 className='text-center mt-5'>Sign In Here</h3>
            <div className='w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Sign Up
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
            <Button className='w-25 d-block mx-auto' variant="light" type="submit">
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