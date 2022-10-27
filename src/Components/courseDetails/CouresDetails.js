import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const CouresDetails = () => {
    
    const info = useLoaderData()
    console.log(info);
    const { id, name, title, details, logo,instructor,learner } = info;
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
                    <div className="card-actions justify-around">
                        <div><button className="btn glass bg-indigo-500 btn-wide m-0 ">Download</button></div>
                        <div><Link to={`/checkout/${id}`}><button className="btn glass bg-green-400 text-slate-600 btn-wide m-0 ">Get Premium Acsess</button></Link></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CouresDetails;