import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const [dark, setDark] = useState(false);
    const { user } = useContext(AuthContext);
    const handleTheme = d => {
        setDark(d)
    }

    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  px-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/courses'>Courses</Link>
                            </li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <div onClick={() => handleTheme(!dark)} className='flex items-center ml-4 cursor-pointer'>
                                {
                                    dark ? <FaSun></FaSun> : <FaMoon></FaMoon>
                                }
                            </div>
                        </ul>
                    </div>
                    <img className='h-10 w-15' src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl px-0">Market Holder</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <div onClick={() => handleTheme(!dark)} className='flex items-center cursor-pointer'>
                            {
                                dark ? <FaSun></FaSun> : <FaMoon></FaMoon>
                            }
                        </div>
                    </ul>
                </div>
                <div className="navbar-end flex-col md:flex-row">
                    <Link to='/login'><button className="btn btn-outline mr-1 mb-2 btn-sm">Login</button></Link>
                    {user?.email}
                    <Link to='/signup'><button className="btn btn-outline mb-2 btn-sm">Sign up</button></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;