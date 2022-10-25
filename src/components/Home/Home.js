import React from 'react';
import './Home.css';
import work from '../../assets/images/work.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home flex items-center justify-center'>
            <div className="home-details text-center md:ml-4 md:text-left md:w-1/2">
                <h1 className='text-5xl font-semibold'>Welcome to <span className='font-thin'>Market Holder.</span></h1>
                <p className=' md:w-3/5 my-5'>Intoducing to our brand new courses. Market holder provides courses on freelancing topics. Visit our courses and get enrolled now.</p>
                <Link to='/courses'><button className="btn btn-outline my-2">Courses &nbsp; <FaArrowRight></FaArrowRight> </button></Link>
            </div>
            <div className="home-img hidden md:block">
                <img src={work} alt="" />
            </div>
        </div>
    );
};

export default Home;