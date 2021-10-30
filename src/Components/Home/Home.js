import React, { useEffect, useState } from 'react';
import './Home.css';
import { Carousel, Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://radiant-refuge-06811.herokuapp.com/products')
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

            <Container className="sec-1 my-5 ">
                <div>
                    <img src="https://media.cntraveler.com/photos/605cee7a63ce0a17d417e8e3/3:4/w_2799,h_3732,c_limit/WomensHikingBackpacks-2021-GettyImages-594201133.jpg" alt="" />
                </div>
                <div>
                    <h1>A Simply Perfect Place <br />
                        To Get Lost</h1>
                    <p>Treat yourself with a journey to your inner self. <br /> Visit a mystique Tibet and <br /> start your spiritual adventure. We promise, <br /> you’ll enjoy every step you make.</p>
                </div>
            </Container>
            <div>
                <h3 className="sec-2-head">Life Is All About</h3>
            </div>
            <Container className="sec-2 mb-5">

                <div>
                    <h4>Challence</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZXa9jrcOs41m9cpcM1sFEfPmpYk5tS5e4A&usqp=CAU" alt="" />
                </div>
                <div>
                    <h4>Adventure</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiygWKzhkWEfSKP8nY-vrRi8o1zbYFTsv0Fw&usqp=CAU" alt="" />
                </div>
                <div>
                    <h4>Success</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZTmRMV_gevY-EkICt25jkhd_qc5elNkPjQ&usqp=CAU" alt="" />
                </div>
            </Container>
        </>
    );
};

export default Home;