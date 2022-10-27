import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const info = useLoaderData()
    console.log(info);
    const { id, name, title, details, logo, instructor, learner } = info;

    return (
        <div className='container mx-auto bg-gray-300'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>We appritiet your choice , Wish You all the best</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;