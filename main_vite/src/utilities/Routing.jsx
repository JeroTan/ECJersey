import { useState } from 'react'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom';
//We will use use param later on

//-- The component pages --//
import Home from '../pages/Home.jsx';
import Jersey from '../pages/Jersey.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import Cart from '../pages/cartPage/CartView.jsx';
import Profile from '../pages/Profile.jsx';
import ItemPage from '../pages/itemPage/ItemPage.jsx';
import NotFound from '../pages/NotFound.jsx';
import Shoes from '../pages/Shoes.jsx';
import Payment from '../pages/invoice/Payment.jsx';

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
        element: <Shoes />,
        path:'/shoes',
    },
    {
        element:<NotFound />,
        path:'*'
    },
    {
        element:<NotFound />,
        path:'/notfound'
    },
    {
        element:<ItemPage />,
        path:'/item/:id'
    },
    {
        element:<Register />,
        path:'/register'
    },
    {
        element:<Profile/>,
        path: '/profile'
    },
    {
        element:<Login />,
        path:'/login'
    },
    {
        element:<Cart/>,
        path:'/cart'
    },
    {
        element:<Payment />,
        path:'/payment'
    }
]);

export default ()=>{
    return  <RouterProvider router={router} />
};