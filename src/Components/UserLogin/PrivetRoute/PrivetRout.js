import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
import {Navigate, useLocation} from 'react-router-dom'

const PrivetRout = ({ children }) => {
    const { user , loading} = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return <div className="radial-progress" style={{ "--value": 80 }}>80%</div>
    }


    if (!user?.uid) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    else return children;
};

export default PrivetRout