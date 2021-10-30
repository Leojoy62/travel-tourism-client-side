import React, { useRef } from 'react';
import './PlaceOrder.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = (props) => {



    const { packageName } = useParams();
    const { user } = useAuth()
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>

            <h1>Welcome to <span className="package-name">{packageName}</span> tour package.</h1>
            <h6>Discription: In this tour package you will be able to stay at {packageName} 3 days and two nights. </h6>
            <p>Package Cost: 10000 BDT</p>

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" defaultValue={user.displayName} ref={nameRef}  {...register("Name")} />

                <br />
                <input placeholder="Email" defaultValue={user.email} ref={emailRef} {...register("Email", { required: true })} />
                <br />
                {errors.Email && <span className="error">This field is required</span>}
                <br />
                <input placeholder="Address" ref={addressRef} {...register("Address", { required: true })} />
                <br />
                <input placeholder="City" ref={cityRef} {...register("City", { required: true })} />
                <br />
                <input placeholder="Phone" ref={phoneRef} {...register("Phone", { required: true })} />
                <br />

                <Link to={`/myorder/`}>
                    <br />
                    <Button type="submit" variant="warning">Confirm</Button>
                </Link>
            </form>





        </div >
    );
};

export default PlaceOrder;