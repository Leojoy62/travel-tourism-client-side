import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, image, description } = props.service
    return (
        <div className="service">
            <div>
                <img src={image} alt="" />
                <p>{name}</p>
                <p>{description}</p>
                <Link to="/placeorder">
                    <Button variant="warning">Book Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;