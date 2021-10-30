import React from 'react';
import './PlaceOrder.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PlaceOrder = () => {
    const { packageName } = useParams();
    return (
        <div>
            <h1>Welcome to <span className="package-name">{packageName}</span> tour package.</h1>
            <h6>Discription: In this tour package you will be able to stay at {packageName} 3 days and two nights. </h6>
            <p>Package Cost: 10000 BDT</p>
            <Link to="/myorder">
                <Button variant="warning">Confirm</Button>
            </Link>

        </div>
    );
};

export default PlaceOrder;