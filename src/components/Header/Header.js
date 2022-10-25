import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  px-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a>Courses</a>
                            </li>
                            <li><a>FAQ</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <img className='h-10 w-15' src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl px-0">Market Holder</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>Courses</a>
                        </li>
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <button class="btn btn-outline btn-sm">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;