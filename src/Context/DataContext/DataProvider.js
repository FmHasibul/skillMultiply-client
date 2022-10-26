import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://asten-server.vercel.app/courses`);
            const newData = await response.json();
            console.log(newData);
            setDatas(newData)
        };

        // fetchData();
    });
    
    const name = { name: 'hasib' };
    const data ={name, }
    
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;