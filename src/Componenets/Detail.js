import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Detail = () => {
    const detail = useLoaderData()
    console.log(detail);
    return (
        <div>
            <div>
                <img className=' bg-orange-200 p-4 w-5/12 rounded-lg flex mx-auto' src={detail.image} alt="" />
                <div className=' flex flex-col mx-auto text-center bg-gray-300 p-4 mt-4 w-10/12 '>
                    <p className=' text-amber-700 font-bold '>{detail.title}</p>
                    <p className=' text-slate-900 mt-2'>{detail.description}</p>
                    <p className=' text-red-800 font-bold mt-2'>Rating: {detail.rating.rate}</p>
                </div>
                <div className=' flex justify-center items-center'>
                    <Link to='/premium'><button className=' bg-violet-700 p-2 rounded-md text-slate-200 mt-4 hover:bg-blue-500'>Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;