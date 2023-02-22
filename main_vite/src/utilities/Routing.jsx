import { useState } from 'react'

//-- The component pages --//
import Home from '../pages/Home.jsx';
import Jersey from '../pages/Jersey.jsx';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        element:<Home />,
        path:'/'
    },
    {
        element:<Home />,
        path:'/home'
    },
    {
        element:<Jersey/>,
        path:'/jersey'
    },
    {
        element:<></>,
        path:'*'
    }
]);

export default ()=>{
    return  <RouterProvider router={router} />
};