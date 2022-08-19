import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import NavLogout from '../navbar/NavLogout';
import axios from "axios";
import swale from "sweetalert";

import {
  Link

} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  Submit = (values, history) => {
    axios
      .post("http://localhost:8080/login", values)
      .then(res => {
        if (res.data.result === "success") {
          localStorage.setItem("TOKEN_KEY", res.data.token);
          swale("Success!", res.data.message, "success")
         .then(value  => {
            history.push("/dashboard");
          });
        } else if (res.data.result === "error") {
          swale("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        console.log(error);
        swale("Error!", error, "error");
      });
      
  };


    // if (email == "can@gmail.com" && password == "asdf") {

    //   e.preventDefault();
    //   console.log(email, password);
    //   const userData = {
    //     email,
    //     password,
    //   };
    //   localStorage.setItem('token-info', JSON.stringify(userData));
     
    //   setEmail('');
    //   setPassword('');
    //   navigate("/form");
    
    //   // props.setIsLoggedin;
    // }
    // else if (email == "admin@gmail.com" && password == "asdf") {
    //   e.preventDefault();
    //   console.log(email, password);
    //   const userData = {
    //     email,
    //     password,
    //   };
    
    //   navigate("/admin");
    // }
    // else {
    //   alert('Please enter a valid email address and password ');
    // }
    // console.log(email);
 // }
 

  return (
    document.title = 'Login',
    <div>
      <Navbar />
          <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div class="w-full h-96 p-16 mt-24 m-auto bg-white rounded shadow-lg ring-8 ring-purple-800/400 lg:max-w-md">
              <h1 class="text-4xl -mt-3.5 font-semibold text-center text-orange-400 ">LOGIN</h1>
              <form class="mt-12" onSubmit={Submit}>
                <div>
                  <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}
                    class="block w-full px-4 py-2 mt-2 text-black  bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Email " />
                </div>
                <div class="mt-8">
                  <div>
                    <input type="password" name="passoword" value={password} onChange={e => setPassword(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-black bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Password" />
                  </div>
                  <div class="mt-8 text-center">
                    <button type='submit'
                      class="w-32  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-red-400">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Login;