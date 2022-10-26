import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Componenets/Errorpage";
import Home from "../Componenets/Home";
import Login from "../Componenets/Login";
import Register from "../Componenets/Register";
import Main from "../layout/Main";

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
        ]
    }
])