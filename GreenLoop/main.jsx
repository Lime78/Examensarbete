// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Landing from './Frontend/src/Components/LandingPage.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Landing />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Frontend/src/Routes/router.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);