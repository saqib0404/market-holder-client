import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center mt-12'>Blogs</h2>
            <div className="blogs mb-10 flex items-center flex-col">
                <div className="blog my-5 w-8/12 py-4 px-4 border-2 rounded-lg border-zinc-800">
                    <h3 className='text-xl text-center'>Q: What is cors?</h3>
                    <p className='p-4 text-slate-800 text-justify'>CORS stands for Cross-Origin Resource Sharing. (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;