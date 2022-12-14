import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layout/Main';
import Blog from '../components/Blog/Blog';
import Login from '../components/Login/Login';
import SignUp from '../components/SignuUp/SignUp';
import Courses from '../components/Courses/Courses';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import PremiumAccess from '../components/PremiumAccess/PremiumAccess';
import PrivateRoute from './PrivateRoute';
import FAQ from '../components/FAQ/FAQ';

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
                element: <FAQ></FAQ>
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
                loader: () => fetch('https://market-holder-server.vercel.app/all-courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://market-holder-server.vercel.app/all-courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://market-holder-server.vercel.app/all-courses/${params.id}`),
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>
            }
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