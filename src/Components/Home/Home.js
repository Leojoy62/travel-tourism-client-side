import React, { useEffect, useState } from 'react';
import './Home.css';
import { Carousel, Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/countryside-sign-retro-motivation-outline_1134-789.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/autumn-hiking-france-with-views-alps_181624-40768.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Container className="mt-5">
                <h1>Our Packages:</h1>
                <br />
                <div className="service">
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Home;