import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";
import EditUser from '../admin/EditUser';
import ViewUsers from '../admin/ViewUsers';
import NoFound from "../home/NoFound";


const Admin = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
       loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5001/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:5001/getUsers/${id}`);
        loadUsers();
    };
    // const search=async id=>{
    //     const result = await axios.get(`http://localhost:5001/user/${id}`);
    //     setUser("");
    //     setUser(result.data);
    // }
    

   
    const Search_bar=()=> {
        return(
            <div className="flex items-center ml-[75%]">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 rounded-full  active:bg-red-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        )
    }


    return (
        
        <div className="">
           <NavbarAdmin />,
          
            <div className="overflow-x-auto relative">
                <h1 className=" text-white  text-4xl font-bold">Candidates</h1>
                <Search_bar/>
                <table className="w-4/5 mt-4 m-auto rounded-2xl text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>  
                            <th scope="col" class="p-4   ">NO ID</th>
                            <th scope="col" class="p-4   ">PLACEMENT DRIVE ID</th>
                            <th scope="col" class="p-4  ">CANDIDATE ID</th>
                            <th scope="col" class="p-4 ">CANDIDATE NAME</th>
                            <th scope="col" class="p-4 ">BATCH NAME</th>
                            <th scope="col" class="p-4 ">DOMAIN</th>
                            <th scope="col" class="p-4 ">TYPE OF DISABILITY</th>
                      
                            <th scope="col" class="p-4 px-20">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" >{index + 1}</th>


                                <th class="py-4 px-6" >{user.pId}</th>

                                <td class="py-4 px-6">{user.cId}</td>
                                <td class="py-4 px-6">{user.cName}</td>
                                <td class="py-4 px-6">{user.bName}</td>
                                <td class="py-4 px-6">{user.domain}</td>
                                <td class="py-4 px-6">{user.tOfD}</td>
                              
                                <td class=" relative py-6 px-5">
                                    <Link className=" bg-blue-600 text-black font-bold p-3 rounded-md m-1" to={`user/${user._id}`}>
                                        View
                                    </Link>
                                    <Link
                                        className=" bg-white text-black font-bold p-3 rounded-md m-1"
                                        to={`edit/${user._id}`}
                                    >
                                        Edit
                                    </Link>
                                 
                                    <button
                                        className="  bg-red-600 text-black font-bold p-3 rounded-md m-1 "
                                        onClick={() => deleteUser(user._id)}
                                    >
                                    Delete
                                    </button>
                                   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            

        </div>
    );
};

export default Admin;
