import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <div>
            <h3 className='mt-5 text-center text-primary'>Connect With me</h3>
            <Form className='w-25 mx-auto'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <textarea placeholder='Your message' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </Form.Group>

                <Button className='d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>

    );
};

export default ContactMe;