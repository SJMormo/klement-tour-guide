import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {
    const navigate = useNavigate();
    const handleThankYou = e => {
        e.preventDefault();
        navigate('/thankyou');
    }
    return (
        <div className='container'>
            <h3 className='mt-5 text-center text-primary'>Connect With me</h3>
            <Form className='w-75 mx-auto mt-3'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter Email" required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <textarea placeholder='Your message' class="form-control" required id="exampleFormControlTextarea1" rows="3"></textarea>
                </Form.Group>

                <Button onClick={handleThankYou} className='d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>

    );
};

export default ContactMe;