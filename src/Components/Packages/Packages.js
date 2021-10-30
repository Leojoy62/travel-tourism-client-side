import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://radiant-refuge-06811.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <>
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

export default Packages;