import React, { useRef } from 'react';


const AddNewOrder = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const handdleAddPackage = e => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;
        const newPackage = { name, description, image };

        fetch('https://radiant-refuge-06811.herokuapp.com/package', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })


        e.preventDefault();
    }


    return (
        <div>
            <h3>Add New Packages Here:</h3>
            <form className="shipping-form" onSubmit={handdleAddPackage}>

                <input placeholder="name" defaultValue="" ref={nameRef} />
                <br />
                <input placeholder="description" ref={descriptionRef} />
                <br />
                <input placeholder="image url" ref={imageRef} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewOrder;