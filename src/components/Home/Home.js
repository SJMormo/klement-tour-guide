import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h3 className='text-center text-primary mt-2 mb-3'>Klement's Bandarban Tour Guide</h3>
            <Banner></Banner>

            <h3 className='text-center text-primary mt-5 mb-3'>Services</h3>
            <Services></Services>
        </div>
    );
};

export default Home;