import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layout/Main';
import Blog from '../components/Blog/Blog';
import Login from '../components/Login/Login';
import SignUp from '../components/SignuUp/SignUp';
import Courses from '../components/Courses/Courses';

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
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/all-courses'),
                element: <Courses></Courses>
            },
        ]
    },
    {
        path: '*',
        element: <div className='h-screen flex items-center justify-center'><h1 className='text-5xl'>Oops! &nbsp;404| Page not found</h1></div>
    }
])

const Routes = () => {
    return (
        <>
        </>
    );
};

export default Routes;