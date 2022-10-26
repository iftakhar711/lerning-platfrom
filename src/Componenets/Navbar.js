import React from 'react';


const Navbar = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a
                    href='#'
                    className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
                >

                    <span className='ml-3 text-xl'><span className=' text-red-800 bg-orange-200 p-1 rounded font-bold'>Cour</span>sera</span>
                </a>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                    <a href='#' className='mr-5 hover:text-gray-900'>
                        Home
                    </a>

                    <a href='#' className='mr-5 hover:text-gray-900'>
                        Profile
                    </a>
                    <a href='#' className='mr-5 hover:text-gray-900'>
                        Wallet
                    </a>
                    <button className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                        Logout
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-4 h-4 ml-1'
                            viewBox='0 0 24 24'
                        >
                            <path d='M5 12h14M12 5l7 7-7 7'></path>
                        </svg>
                    </button>

                    <a href='#' className='mr-5 hover:text-gray-900'>
                        Login
                    </a>
                </nav>
            </div>
        </div >
    );
};

export default Navbar;