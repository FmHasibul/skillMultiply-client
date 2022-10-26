import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
import app from '../../../firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const Signin = () => {
        const { emailLogin } = useContext(AuthContext);
    }
    const [ userData, setUserData] = useState({email:"", password:""})
    const handleEmailChange=(e) => {
        const mail = e.target.value;
        // console.log(email);
        setUserData({ ...userData, email: mail })
        // console.log(userData)
    }
    const handlePassChange = (e) => {
        const pass = e.target.value;
        // console.log(password);
        setUserData({ ...userData, password: pass })
        // setUserData(pass)
        // console.log('pass=',userData)
    }

    const submitFunction = (event) => {
        event.preventDefault();
        const email = userData.email
        // console.log('mail',email);
        const password = userData.password
        console.log(password);
        // console.log(userData);
        
               
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
                                    onChange={handleEmailChange}
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
                                    onChange={handlePassChange}
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered" required />
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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