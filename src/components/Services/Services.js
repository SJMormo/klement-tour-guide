import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container'>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>
                    )
                }
            </Row>
        </div>
    );
};

export default Services;