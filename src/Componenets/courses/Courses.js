import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const news = useLoaderData()
    // console.log(news);
    return (
        <div >
            <div className=' grid gap-4'>
                {news.map(n => <h1>{n.title}</h1>
                )}
            </div>
        </div>
    )


};

export default Courses;