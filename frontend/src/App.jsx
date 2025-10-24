import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop.jsx";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/Contact";
import Book from "./pages/Book.jsx";

//check for sanity
// import Blog from './components/Blog.jsx'
// import SinglePost from './components/SinglePost.jsx'
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />

        
        {/* this is working  */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* for sanity.io check */}
        {/* <Route path="/blog" element = {<Blog/>} />
          <Route path="/blog/:slug" element = {<SinglePost/>} /> */}
      </Routes>
    </>
  );
};

export default App;
