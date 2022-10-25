import React from 'react';
import Header from '../Components/Header';
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-rows grid-flow-col gap-4">
                <div  className="border col-span-3 ">side navigation</div>
                <div className="col-span-9 "> <Outlet></Outlet></div>                
            </div>
            <Footer/>
            
        </div>
    );
};

export default Main;