import React from 'react';
import {Link} from 'react-router-dom'
const ErrorRoute = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='container mx-auto'> There is no route Here <br />
                <span className='text-2xl text-green-500'><Link to='/home'>Go Home</Link></span></h1>
        </div>
    );
};

export default ErrorRoute;