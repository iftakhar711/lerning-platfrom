import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detail = () => {
    const detail = useLoaderData()
    console.log(detail);
    return (
        <div>
            <div>
                <img className=' bg-orange-200 p-4 w-5/12 rounded-lg flex mx-auto' src={detail.image} alt="" />
                <div className=' bg-gray-300 p-4'>
                    <p>{detail.title}</p>
                    <p>{detail.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Detail;