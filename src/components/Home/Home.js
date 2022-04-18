import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h3 className='text-center text-primary mt-3 mb-3'>Your Favorite Bandarban Tour Guide</h3>
            <Banner></Banner>

            <h3 className='text-center text-primary mt-5 mb-3'>Services</h3>
            <Services></Services>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;