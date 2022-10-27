import React from 'react';

const Blog = () => {
    return (
        <div className=' lg:grid grid-cols-2 mx-auto text-center'>
            <div className=' bg-slate-200 p-2 rounded-md w-4/5 m-4'>
                <p>1:what is cors?</p>
                <p><span className=' bg-orange-400 p-1 rounded-lg'>Ans:</span> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
            </div>
            <div className=' bg-slate-200 p-2 rounded-md w-4/5 m-4' >
                <p>2:Why are you using firebase? What other options do you have to implement authentication?</p>
                <p><span className=' bg-orange-400 p-1 rounded-lg'>Ans:</span> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
            </div>
            <div className=' bg-slate-200 p-2 rounded-md w-4/5 m-4'>
                <p>3:How does the private route work?</p>
                <p><span className=' bg-orange-400 p-1 rounded-lg'>Ans:</span> The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
            </div>
            <div className=' bg-slate-200 p-2 rounded-md w-4/5 m-4'>
                <p>4:What is Node? How does Node work?</p>
                <p><span className=' bg-orange-400 p-1 rounded-lg'>Ans:</span> Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isn’t a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that it’s something other than server-side JavaScript.</p>
            </div>
        </div>
    );
};

export default Blog;