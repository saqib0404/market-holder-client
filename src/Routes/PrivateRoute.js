import React from 'react';
import { useContext } from 'react';
import loaderImg from '../assets/images/loader.png';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div className='h-screen flex items-center justify-center'>
            <button type="button" class="" disabled>
                <img class="animate-spin h-5 w-5 mr-3 inline" src={loaderImg} alt="" />
                Loading...
            </button>
        </div>
    }

    if (!user?.uid) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;