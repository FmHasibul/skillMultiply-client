import {RouterProvider} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import routes from './Routes/Routes';

function App() {
 

  return (
    <div >
      
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
