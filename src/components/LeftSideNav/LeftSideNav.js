import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ courses }) => {
    return (
        <div className='text-center'>
            {
                courses.map(course => {
                    return <div className='flex flex-col'  key={course.id}><Link className='btn my-2 mx-2 btn-ghost btn-active'>{course.title}</Link></div>
                })
            }
        </div>
    );
};

export default LeftSideNav;