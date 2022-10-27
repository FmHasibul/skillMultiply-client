import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [datas, setDatas] = useState([])
    // https://asten-server.vercel.app/courses
    useEffect(() => {
        fetch('https://asten-server.vercel.app/courses')
            .then(res => res.json())
        .then(data => setDatas(data))

        // fetchData();
    },[]);
    
    
    const data ={datas, setDatas }
    
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;