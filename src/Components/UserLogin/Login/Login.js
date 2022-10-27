
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
import { useNavigate, useLocation} from 'react-router-dom'

const Login = () => {
    const { emailLogin } = useContext(AuthContext)    
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.from?.pathname || '/home'

    const submitFunction = (event) => {
        event.preventDefault();
         const form = event.target
        const email = form.email.value;
        
        const password = form.password.value;
        console.log(email, password);
        // console.log(userData);

        emailLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(e => setError('Email Or Password is not matching'))
        
               
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>                        
                    </div>
                    <form onSubmit={submitFunction} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input                                    
                                    type="email"
                                    name='email'
                                    placeholder="email"
                                    className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered" required />
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt text-red-600 link link-hover">{error}</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;