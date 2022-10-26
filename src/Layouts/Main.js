import React from 'react';
import Header from '../Components/Header';
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (

        <div>
            <Header/>            
               <Outlet></Outlet>
            <Footer />                      
        </div>
    );
};

export default Main;