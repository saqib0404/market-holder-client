import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PremiumAccess = () => {
    const course = useLoaderData();
    const navigate = useNavigate();

    const handleAccess = e => {
        e.preventDefault();
        e.target.reset();
        navigate('/');
        alert('Premium Access Allowed')
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h2 className='text-3xl font-semibold'>Get Premium accesss to our <span className='underline font-mono'>{course.title}</span> course</h2>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAccess} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="e.g. Saqib Ahmad " className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input type="text" placeholder="e.g. Elephant Road" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Get Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PremiumAccess;