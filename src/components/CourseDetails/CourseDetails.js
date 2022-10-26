import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { description, image, title, duration, classes, instructor, quizes, assignments, id } = course;
    // console.log(course);
    return (
        <div className='flex flex-col items-center my-8'>
            <button className='btn btn-sm btn-warning'>Download PDF</button>
            <h2 className="text-4xl font-semibold mb-2">{title}</h2>
            <div className="card card-compact w-10/12 md:w-7/12 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Instructor: {instructor}</h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-slate-600 text-xl'>Classes on : {classes}</p>
                    <div className='text-xl md:flex justify-around mt-2'>
                        <p className='text-amber-800'>Assignments: {assignments}</p>
                        <p className='text-amber-800'>Duration: {duration}</p>
                        <p className='text-amber-800'>Quizes: {quizes}</p>
                    </div>
                    <div className="card-actions justify-start mt-4">
                        <Link to={`/premium/${id}`}><button className="btn">Get Premium Access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;