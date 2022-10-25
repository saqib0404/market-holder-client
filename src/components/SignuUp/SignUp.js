import React from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;;
        console.log(email, password, name, photoURL);
        createUser(email, password)
            .then(result => {
                toast.success('User created Successfully');
                handleUpdateUser(name, photoURL);
                console.log(result.user);
                form.reset();
            })
            .catch(e => {
                console.log(e);
            })
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => { })
            .catch(e => console.log(e))
    }


    return (
        <div>
            <Toaster></Toaster>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">SIGN UP FOR FREE!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleCreateUser} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="your photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <span className='label-text-alt'>Already have an account? <Link to='/login' className="label-text-alt link link-hover">Login</Link></span>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;