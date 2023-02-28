import { useState } from 'react'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom';
//We will use use param later on

//-- The component pages --//
import Home from '../pages/Home.jsx';
import Jersey from '../pages/Jersey.jsx';



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
    },
    {
        element:<></>,
        path:'/items/:id'
    }
]);

export default ()=>{
    return  <RouterProvider router={router} />
};