import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import FormComponent from "./components/Form/FormComponet";
import ViewUsers from "./components/admin/ViewUsers";
import EditUser from "./components/admin/EditUser";
import Admin from "./components/admin/Admin";
import NoFound from "./components/home/NoFound";
import Popup
 from "./components/Form/Popup";

import About from "./components/about/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InterviewPage from "./components/interview/InterviewPage";


function App() {

  return (
    <div>

      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login/>} />
          <Route path="/interview" element={<InterviewPage/>} />
          
          <Route path="/admin/edit/:id" element={<EditUser />} />
          <Route path="/admin/user/:id" element={<ViewUsers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sucessful" element={<Popup />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
