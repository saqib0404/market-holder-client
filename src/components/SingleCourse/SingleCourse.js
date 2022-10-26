import React from 'react';

const SingleCourse = ({ course }) => {
    return (

        <div className="card border border-slate-800 card-compact bg-base-100 shadow-xl">
            <figure><img src={course.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description.slice(0,100)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default SingleCourse;