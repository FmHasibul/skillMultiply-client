import React, { useState } from 'react';
import { useContext } from 'react';
import { FaDragon } from 'react-icons/fa';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const Register = () => {
    
    const {createUser} = useContext(AuthContext)

    const [userData, setUserData] = useState({ email: "", password: "" })
    const [errMassage, setErrMassage] = useState({ email: "", password: "" })
    const handleEmailChange = (e) => {
        const mail = e.target.value;
        // console.log(email);
        if (!/\S+@\S+\.\S+/.test(mail)) {
            setErrMassage({ ...errMassage, email: "Please use valid email" }) 
            setUserData({ ...userData, email:'' })
        }
        else {
            setUserData({ ...userData, email: mail })
            setErrMassage({ ...errMassage, email: "" })
            // console.log(userData)
        }
    }
    const handlePassChange = (e) => {
        const pass = e.target.value;
        // console.log(password);
        if (pass.length < 7) {
            setErrMassage({...errMassage, password:'Make it at least 7 character'})
        }
        else {
            setUserData({ ...userData, password: pass })
            setErrMassage({ ...errMassage, password: '' })
        }
        // setUserData(pass)
        // console.log('pass=',userData)
    }

    const submitFunction = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const photo = event.target.photoUrl.value
        const email = userData.email
        // console.log('mail',email);
        const password = userData.password
        console.log(photo, name, password, email);
        // console.log(userData);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
        .catch(e=> console.error('error', e))


    }
    return (
        <div className='mb-16 container mx-auto rounded'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <form onSubmit={submitFunction} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your full name"
                                    className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name='photoUrl'
                                    placeholder="Image URL here"
                                    className="input input-bordered"  />
                            </div>
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
                                {errMassage.email&& <p className='text-red-600'><FaDragon />{ errMassage.email}</p>}

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
                                {errMassage.password && <p className='text-red-600'><FaDragon />{errMassage.password}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;