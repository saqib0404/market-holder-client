import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='my-8'>
            <h2 className='text-3xl text-center'>Commonly asked questions about our website</h2>
            <div className='w-11/12 md:w-9/12 mx-auto my-2'>

                <div className="collapse mb-2 border border-orange-800  rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        1. Which course will be best for a student?
                    </div>
                    <div className="collapse-content">
                        <p>Well sir, it varies. Like if you just want to learn or explore something then every courses of ours are great. But if you are dedicated and focused to your future then we would recomend our graphics design course. To learn more you can explore our <Link className='text-blue-700 underline italic' to='/courses'>courses</Link>.</p>
                    </div>
                </div>

                <div className="collapse mb-2 border border-orange-800  rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        2. Which course is better? Graphics design or digital marketing?
                    </div>
                    <div className="collapse-content">
                        <p>Sir actually these are of different topics. Each of them are great in there own places. And we publish high class courses with full support.</p>
                    </div>
                </div>

                <div className="collapse mb-2 border border-orange-800  rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        3. What is the difference between web development and design?
                    </div>
                    <div className="collapse-content">
                        <p>Sir web development is basically building a web page with coding or by using wordpress and so. On the other hand web designing is just making a design that how the web page will look like. You can explore our <Link className='text-blue-700 underline italic' to='/courses'>courses</Link> to learn more</p>
                    </div>
                </div>

                <div className="collapse mb-2 border border-orange-800  rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        4. Do you publish courses on programming languages?
                    </div>
                    <div className="collapse-content">
                        <p>Sorry Sir !! Actually we don't. But we are plannig to do so. Soon you will see these courses available on our site.</p>
                    </div>
                </div>

                <div className="collapse mb-2 border border-orange-800  rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        5. I want to get premium acces to some of your courses. What can I do?
                    </div>
                    <div className="collapse-content">
                        <p>Sir to get premium access you just need to create an account to our website. Then just simply login. Then you will have to go to our courses and select your course and click on "Get Premium access".</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;