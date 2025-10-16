import React from "react";
import './index.css'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from './pages/Home'
// import  Contact  from "./pages/Contact";
import ContactPage from "./pages/Contact";


import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
 

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactPage/>} />

      </Routes>
    </>
    //  <div>App</div>
  );
};

export default App;
