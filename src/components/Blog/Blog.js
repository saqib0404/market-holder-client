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
                <div className="blog my-5 w-8/12 py-4 px-4 border-2 rounded-lg border-zinc-800">
                    <h3 className='text-xl text-center'>Q: Why do we use firebase? What other options do we have to implement authentication?</h3>
                    <p className='p-4 text-slate-800 text-justify'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to our app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and more. Other options we have to implement authentication are:
                        <li className='px-5'>Auth0</li>
                        <li className='px-5'>Ory</li>
                        <li className='px-5'>Supabase</li>
                        <li className='px-5'>PingIdentity</li>
                        <li className='px-5'>Keycloak</li>
                        <li className='px-5'>Frontegg</li>
                        <li className='px-5'>Authress</li>
                        <li className='px-5'>STYTCH</li>
                        <li className='px-5'>Amazon Cognito</li>
                        <li className='px-5'>OneLogin</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;