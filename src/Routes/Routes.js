import React from 'react';
import { createBrowserRouter  } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layout/Main';
import Blog from '../components/Blog/Blog';
import Login from '../components/Login/Login';
import SignUp from '../components/SignuUp/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                // element: <Home></Home>
            },
            {
                path: '/faq',
                // element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

const Routes = () => {
    return (
        <>
        </>
    );
};

export default Routes;