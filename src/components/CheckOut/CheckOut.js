import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h3 className='text-center'>Book Our service no: {serviceId}</h3>
        </div>
    );
};

export default CheckOut;