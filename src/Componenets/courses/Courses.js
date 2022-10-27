import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';


const Courses = () => {
    const news = useLoaderData()
    // console.log(news);
    return (
        <div className='sm:grid md:grid lg:flex'>

            <div className='sm:w-full grid gap-4 bg-slate-200 lg:w-2/12 md:w-full text-center p-4 '>
                <h1 className=' bg-slate-400 p-2'>Course Name:</h1>
                {news.map(n => <h1>{n.title}</h1>
                )}
            </div>
            <div className=' sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-2 p-4'>
                {news.map(c => <Course c={c}></Course>)}
            </div>
        </div>
    )


};

export default Courses;