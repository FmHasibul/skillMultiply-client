import {RouterProvider} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import routes from './Routes/Routes';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/courses`);
      console.log(response);
      const newData = await response.json();
      console.log(newData);
    };

    fetchData();
  });

  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
