import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const info = useLoaderData()
    console.log(info);
    const { id, name,  } = info;

    return (
        <div className='container flex rounded-3xl mx-auto h-96 bg-gray-300'>
            <div className="card w-96 glass mx-auto my-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Course Name: {name}</h2>
                    <p>We appriciate your choice , Wish You all the best</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;