import React from 'react'

import wvf from '../images/WinVinayaAcademy.jpg'
import Admin from './Admin';
import EditUser from './EditUser';
import ViewUsers from './ViewUsers';
import NoFound from '../home/NoFound'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function NavbarAdmin() {
  return (
    <div>
      
        <div className="flex justify-between mx-auto p-6 bg-white text-orange-600 ">
            <img className='w-auto h-12' src={wvf} alt="WVF logo" />

       
       


            <div className='flex-auto text-2xl px-6 font-medium '>
                
          
                <Link to='/' className=" p-1 px-6 w-full ml-[90%] hover:bg-orange-100 focus:outline-none ">Logout</Link>
            </div> 
        </div>
    </div>
  )
}

export default NavbarAdmin
 