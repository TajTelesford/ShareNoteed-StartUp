import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Dashboard from './routes/Dashboard'

import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route path="/home" element={<Home />} />
      <Route path="/home/dashboard" element={<Dashboard />} />
    </Route>
    
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

