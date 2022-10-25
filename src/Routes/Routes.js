import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layout/Main';
import Blog from '../components/Blog/Blog';

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
            }
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