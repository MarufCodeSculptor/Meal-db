import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
