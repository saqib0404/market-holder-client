import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='mb-2 md:flex justify-between mx-2 items-center'>
                <div className='flex items-center justify-center my-2'>
                    <img className='h-12' src={logo} alt="" />
                    <h2 className='text-xl font-semibold'>Market Holder</h2>
                </div>
                <div className='footer-links py-4 text-xl text-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </div>
            </div>
            <h3 className='text-xl text-center'>Copyright © 2022 Market Holder</h3>
        </footer>
    );
};

export default Footer;