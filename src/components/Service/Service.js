import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        price: {price}
                        <br />
                        Description: {description}
                    </Card.Text>
                    <button className='btn btn-primary w-100'>Check Out</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;