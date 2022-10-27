import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Context';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(toast.warning('User logged out!'))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link
                    to='/'
                    className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>

                    <span className='ml-3 text-xl' >
                        <span className=' text-red-800 bg-orange-200 p-1 rounded font-bold'>Cour</span>sera</span>
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                    <Link to='/home' className='mr-5 hover:text-gray-900'>
                        Home
                    </Link>

                    <Link to='/allcourse' className='mr-5 hover:text-gray-900'>
                        Courses
                    </Link>
                    <Link to='/faq' className='mr-5 hover:text-gray-900'>
                        FAQ
                    </Link>
                    <Link to='/blog' className='mr-5 hover:text-gray-900'>
                        Blog
                    </Link>
                    <div className="form-control">
                        <label className="label cursor-pointer">

                            <input type="checkbox" className="toggle" checked />
                        </label>
                    </div>
                    {user?.email ? <> <svg onClick={handleLogout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                        <img className=' w-12 h-8 rounded-full' src="https://www.vippng.com/png/detail/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png" alt="" />
                    </> :
                        <>
                            <Link to='/login' className='mr-5 hover:text-gray-900'>
                                Login
                            </Link>
                            <Link to='/register' className='mr-5 hover:text-gray-900'>
                                Register
                            </Link>
                        </>}




                </nav>
            </div>
        </div >
    );
};

export default Navbar;