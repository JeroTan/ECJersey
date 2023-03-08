import { useState } from 'react'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom';
//We will use use param later on

//-- The component pages --//
import Home from '../pages/Home.jsx';
import Jersey from '../pages/Jersey.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';


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
    },
    {
        element:<Register />,
        path:'/register'
    },
    {
        element:<Login />,
        path:'/login'
    }
]);

export default ()=>{
    return  <RouterProvider router={router} />
};