import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer text-center mt-5'>
            <p className=''>SJMormo's Website &#169; {year}</p>
        </div>
    );
};

export default Footer;