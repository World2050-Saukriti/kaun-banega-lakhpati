import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import App from './App';
import { Winconfetti } from './components/Winconfetti';
import VisionariesProfileCards from './components/Profile';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/won",
        element: <Winconfetti />,
      },
      {
        path: "/profile",
        element: <VisionariesProfileCards/>,
      },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
    </>
);
