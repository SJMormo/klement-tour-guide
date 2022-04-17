import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignIn = () => {
    return (
        <div>
            <h3 className='text-center mt-5'>Sign In Here</h3>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </div>
    );
};

export default SignIn;