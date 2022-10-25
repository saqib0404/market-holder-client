import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className='mb-2 md:flex justify-between mx-2 items-center'>
                <div className='flex items-center justify-center my-2'>
                    <img className='h-12' src={logo} alt="" />
                    <h2 className='text-xl font-semibold'>Market Holder</h2>
                </div>
                <div className='footer-links py-4 text-xl text-center'>
                    <li>Home</li>
                    <li>Couses</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </div>
            </div>
            <h3 className='text-xl text-center'>Copyright © 2022 Market Holder</h3>
        </footer>
    );
};

export default Footer;