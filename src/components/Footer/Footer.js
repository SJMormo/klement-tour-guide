import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className='text-center mt-5'>SJMormo's Website &#169; {year}</p>
        </div>
    );
};

export default Footer;