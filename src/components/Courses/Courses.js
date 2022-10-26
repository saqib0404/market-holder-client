import React from 'react';
import './Courses.css';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='courses-sidebar-container my-10'>
            {/* Left Side Nav */}
            <LeftSideNav courses={courses} ></LeftSideNav>

            {/* All Courses */}
            <div className="courses mx-2 grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-3">
                {
                    courses.map(course => <SingleCourse
                        key={course.id}
                        course={course}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;