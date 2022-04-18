import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/Banner-images/image-1.png'
import image2 from '../../images/Banner-images/image-2.jpg'
import image3 from '../../images/Banner-images/image-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{ height: '40rem' }}
                    className="d-block w-100 img-fluid"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-dark'>Tlabong Falls</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '40rem' }}
                    className="d-block w-100 img-fluid"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Amia Khum Falls</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '40rem' }}
                    className="d-block w-100 img-fluid"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-dark'>A village at Bandarban</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;