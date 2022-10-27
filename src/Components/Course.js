import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext/DataProvider';
import {Link} from 'react-router-dom'

const Course = () => {
    
    const { datas } = useContext(DataContext)
    
    return (
        <div className='grid md:grid-cols-12 gap-5 container mb-16 mx-auto'>
            <div className='md:col-span-3 h-96 text-center  bg-gray-300 rounded-box'>
                <h3 className='font-semibold text-3xl text-cyan-600'>Courses List</h3>
                <ul className="menu text-center ">
                    {
                        datas.map(data => <li key={data.id} className="hover-bordered mx-auto"><Link to={`/courses/${data.id}`}>{ data.name}</Link></li>)
                    }
                    
                </ul>
            </div>
            <div className='md:col-span-9'>
                <div className='grid md:grid-cols-2 gap-4 rounded-lg '>

                    {
                        datas.map(data =>
                            <div key={data.id} className="card bg-slate-500 glass">
                                <figure><img className='h-44 mt-2  rounded' src={data?.logo} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data?.title}</h2>
                                    <p>Ratings : { data.ratings}</p>
                                    <p>{ data.intro > 50 ?data.intro.slice(0, 50) + "...": data.intro}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/courses/${data.id}`}><button className="btn glass btn-wide m-0 ">More Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Course;