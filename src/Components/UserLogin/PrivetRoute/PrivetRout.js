import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
import {Navigate, useLocation} from 'react-router-dom'

const PrivetRout = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    
    if (!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    else return children;
};

export default PrivetRout