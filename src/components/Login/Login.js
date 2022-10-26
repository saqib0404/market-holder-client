import React, { useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                setError('');
                console.log(result.user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(e => {
                setError(e.message);
                console.log(e);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(e => {
                // setError(e.message);
                console.log(e);
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(e => {
                // setError(e.message);
                console.log(e);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <span className='label-text-alt'>Don't have an account? <Link to='/signup' className="label-text-alt link link-hover">Sign up now</Link></span>
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-4">Login</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline mb-2"><FaGithub className='mr-2'></FaGithub> Github</button>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;