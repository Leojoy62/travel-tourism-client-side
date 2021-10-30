import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <h1>Greetings from <span className="lj-travels">LJ-Travels</span></h1>

            <div className="about mt-5">
                <div>
                    <h2>Address</h2>
                    <h6>101, Bashudhara Shopping Mall</h6>
                    <h6>Kawran Bazar, Dhaka</h6>
                </div>
                <div>
                    <h2>Contact</h2>
                    <h6>Cell: +0123456789</h6>
                    <h6>Email: ljtravels@gmail.com</h6>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;