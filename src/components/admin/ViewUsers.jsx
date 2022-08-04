import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";

const ViewUsers = () => {

  const [user, setUser] = useState({
    pId: "",
    cId: "",
    cName: "",
    bName: "",
    domain: "",
    tOfD: "",
    Aptitude_round_statues: "",
    Tech_written_statues: "",
    HR_interview_statues: "",
    Job_role: "",
    score: "",
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    loadUser();
  }, []);


  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5001/user/${id}`);
    setUser(res.data);
  };

  console.log(user)
  return (

    <div className=" text-white ">
      <NavbarAdmin />
      <div className="mt-10">
        <Link className=" bg-orange-600 text-white font-bold p-3 rounded-md" to="/admin">
          Back
        </Link>
      </div>
      
      
      <ul className=" w-2/4 mt-5 m-auto align-items: center items-center text-xl font-medium text-gray-600  rounded-lg border bg-white ">
      <h1 className=" mb-9 font-bold text-2xl ">Placement Id: {user.pId}</h1>  
      <hr className="" />
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Candidate ID: {user.cId}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Candidate Name: {user.cName}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Batch Name: {user.bName}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Domain: {user.domain}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Type of Disability: {user.tOfD}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Aptitude round statues: {user.Aptitude_round_statues}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Tech-written statues: {user.Tech_written_statues}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Tech-interview: {user.Tech_written_statues}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">HR-interview statues: {user.HR_interview_statues}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Job role: {user.Job_role}</li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">score: {user.score}</li>

      </ul>
    </div>
  );
};

export default ViewUsers;
