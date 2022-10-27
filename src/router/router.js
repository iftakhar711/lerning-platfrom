import { createBrowserRouter } from "react-router-dom";
import Blog from "../Componenets/Blog";
import Errorpage from "../Componenets/Errorpage";
import Home from "../Componenets/Home";
import Login from "../Componenets/Login";
import Register from "../Componenets/Register";
import Main from "../layout/Main";
import Courses from "../Componenets/courses/Courses"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Errorpage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allcourse',
                element: <Courses></Courses>,
                loader: () => fetch('https://education-website-server.vercel.app/allcourse')
            },
        ]
    }
])