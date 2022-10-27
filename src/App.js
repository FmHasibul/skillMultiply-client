import {RouterProvider} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import routes from './Routes/Routes';

function App() {
 

  return (
    <div className='bg-gray-200'>
      
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
