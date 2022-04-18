import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/service/${id}`, { name });
    }

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
                    <Button onClick={() => handleDetails(id)} className='btn btn-primary w-100'>Check Out</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;