import React, { useState } from 'react'
import Home from '../home/Home';
import FormComponent from '../Form/FormComponet';
import Login from '../login/Login';
import wvf from '../images/WinVinayaAcademy.jpg'
import About from '../about/About';
import NoFound from '../home/NoFound';
import Admin from '../admin/Admin';
import { useNavigate, useLocation } from 'react-router-dom';




import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    Link

} from "react-router-dom";

const Navbar = () => {
    const [count, setCount] = useState(0);
    const name = React.createContext
    // n
   
    const Location =  useLocation()
        console.log(Location.pathname);

    const PathName = (pathname)=>{
        const Location =  useLocation()
        if (!Location.pathname === pathname)
            return 1;
    }

    return (
        <header>



            <div className="flex justify-between mx-auto p-6 bg-white text-orange-600 ">
                <img className='w-auto h-12' src={wvf} alt="WVF logo" />

                <div className='flex text-2xl px-6 font-medium '>
                    <Link to="/home" className='p-1 px-6 w-full hover:bg-orange-100 focus:outline-none '> Home </Link>
                    <Link to='/about' className='p-1 px-6 w-full hover:bg-orange-100 focus:outline-none '> About </Link>
                    <Link to='/interview' className=" p-1 px-6 w-full hover:bg-orange-100 focus:outline-none ">Interview</Link>
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    
                       <Link to="/" className='p-1 px-8  hover:bg-orange-100 focus:outline-none '> {PathName("/")===0 ? 'Logout' :'Login'} </Link>
                    
                 
                </div>

            </div>


        </header>

    )
}

export default Navbar