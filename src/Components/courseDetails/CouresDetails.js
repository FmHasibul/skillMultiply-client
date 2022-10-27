import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'


const CouresDetails = () => {
    
    const info = useLoaderData()
    console.log(info);
    const {  name, title, details, logo,instructor,learner } = info;
    return (
        <div className='container  rounded-3xl mx-auto mb-16 bg-gray-300'>
            <div className="card lg:card glass w-100 mb-16 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-6xl">{name}</h2>
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className='flex justify-between'>
                        <p>Instructor : {instructor}</p>
                        <p>Running student : {learner}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CouresDetails;