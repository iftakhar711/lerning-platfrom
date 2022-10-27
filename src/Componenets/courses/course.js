import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ c }) => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className=' w-9/12' src={c.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{c.title}</h2>
                    <p>Price:{c.price}$</p>
                    <div className="card-actions justify-end">
                        <Link to={`/course/${c.id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Course;