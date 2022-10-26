import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext/DataProvider';

const Course = () => {
    const [recentData, setRecentData] = useState([])
    const { name } = useContext(DataContext)
    // console.log(name);
    return (
        <div>
            <h4 className='border'>this is courses section {name.name}</h4>
        </div>
    );
};

export default Course;