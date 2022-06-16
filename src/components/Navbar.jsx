import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between mx-auto p-6 bg-white text-orange-600 ">
            <img className='h-12' src="https://2020.winvinayafoundation.org/wp-content/uploads/2020/11/New-WVF-logo2-scaled.jpg" alt="WVF logo" />
            <div className='flex text-2xl px-6 font-medium '>
                <a  href="/" className='p-2 px-6'>About</a>
                <a className='" p-2 px-6 w-full shadow-sm  hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true' href="/">Interview</a><svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <a href="/" className='p-2 px-6'>Login</a> 
            </div>


        </div>
    )
}

export default Navbar