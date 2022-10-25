import React from 'react';
import './Home.css';
import man from '../../assets/images/man.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home flex items-center justify-center'>
            <div className="home-details text-center md:ml-4 md:text-left md:w-1/2">
                <h1 className='text-4xl font-semibold'>Welcome to <span className='font-thin'>Market Holder.</span></h1>
                <p className=' md:w-3/5 my-5'>Intoducing to our brand new courses. Market holder provides courses on freelancing topics. Visit our courses and get enrolled now.</p>
                <button className="btn btn-outline my-2">Courses &nbsp; <FaArrowRight></FaArrowRight> </button>
            </div>
            <div className="home-img hidden md:block">
                <img src={man} alt="" />
            </div>
        </div>
    );
};

export default Home;