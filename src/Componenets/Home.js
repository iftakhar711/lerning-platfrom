import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/265/431/original/vector-training-courses-web-banner.jpg" className=" max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Purches Course & Enjoy.</h1>
                        <p className="py-6">“Every beginner possesses a great potential to be an expert in his or her chosen field.”
                            ― Lailah Gifty Akita, Think Great: Be Great!</p>
                        <div className='flex gap-2'>
                            <button className="btn btn-primary">Get Started</button>
                            <Link to='/login'><button className="btn btn-primary">Login</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;