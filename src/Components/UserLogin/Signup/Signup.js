import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub, } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const Signup = () => {

    const { googleProvider, gitHubLogin } = useContext(AuthContext);

    const gglAuthProvider = new GoogleAuthProvider()

    const gitHubAuthProvider = new GithubAuthProvider()
    
    const handleGoogle = () => {
        googleProvider(gglAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((e) => {
                console.log('error =', e)
            })
    }
    const handlegitHubLogin = () => {
        gitHubLogin(gitHubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((e) => {
                console.log('error =', e)
            })
    }

    return (
        <>
            <div className=" register card w-96 glass display-flex mx-auto">
                
                <div className="card-body">
                    <Link to='/mailregister' className="form-control">                        
                        <button className="btn input text-gray-600 input-bordered gap-2">
                            Login with Your Email
                        </button>
                    </Link>
                    <div className="form-control">                        
                        <button onClick={handleGoogle} className="btn input text-gray-600 input-bordered gap-2">
                            <FaGoogle />
                            Login with Google
                        </button>
                    </div>
                    <div className="form-control">                        
                        <button onClick={handlegitHubLogin} className="btn input text-gray-600 input-bordered gap-2">
                            <FaGithub />
                            Login with GitHub
                        </button>
                    </div>
                    
                    <p className='text-center'>Already Have an accunt?</p>
                    <div className="card-actions justify-center">
                        <Link to='/login'><button className="btn glass">Login now!</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;