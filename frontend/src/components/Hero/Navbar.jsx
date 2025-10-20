import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    // try {
    //   localStorage.removeItem("token");
    //   toast.success("Logout successful");
    //   navigate("/");
    // } catch (err) {
    //   console.error("Logout failed", err);
    //   localStorage.removeItem("token");
    //   navigate("/");
    // }
  };
  const handleLogin = () => {
  navigate("/login");
};


  return (
    <>
      {/* container centered and fixed */}
      {/*  --------width adjust to 88 from 70  */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[70%]">
        <nav
          className={[
            "rounded-full backdrop-blur-md border border-white/50",
            "bg-white/35 shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
            elevated ? "shadow-[0_12px_28px_rgba(0,0,0,0.16)]" : ""
          ].join(" ")}
        >
          <div className="mx-auto px-3 sm:px-4">
            {/* height trimmed: 44px desktop, 40px mobile */}
            {/* -------------adjust height of navbar --------- */}
            <div className="flex h-11 sm:h-11 items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 ring-1 ring-black/10 shadow">
                  {/* small finance/book icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-black">
                    <path
                      fill="currentColor"
                      d="M6 3h9a3 3 0 0 1 3 3v13.2a.8.8 0 0 1-1.2.7L15 19.6l-1.8.9a.8.8 0 0 1-.7 0L9 19.6l-1.8.9a.8.8 0 0 1-1.2-.7V6a3 3 0 0 1 3-3zm0 3v12.08l1-.5 3 1.5 3-1.5 3 1.5V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"
                    />
                  </svg>
                </span>
                <span className="text-[13px] sm:text-sm tracking-tight text-black">
                  pragya <span className="font-semibold">financial services</span>
                </span>
              </Link>

              {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
             <Link to="/" className="text-[14px] text-black hover:text-black hover:scale-105  transition-colors duration-200">Home</Link>
             <Link to="/about" className="text-[14px] text-black hover:text-black hover:scale-105  transition-colors duration-200">About</Link>
             <Link to="/services" className="text-[14px] text-black hover:text-black transition-colors hover:scale-105  duration-200">Services</Link>
             <Link to="/blog" className="text-[14px] text-black hover:text-black transition-colors hover:scale-105  duration-200">Blogs</Link>
             <Link to="/contact" className="text-[14px] text-black  hover:text-black transition-colors hover:scale-105 duration-200">Contact</Link>
           </div>


              {/* Right actions */}
              <div className="flex items-center gap-2">
                <Link
                  to="/book"
                  className="hidden sm:inline-flex items-center justify-center h-8 px-3 rounded-full bg-white text-black text-[13px] font-medium ring-1 ring-black/10 shadow-[0_2px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 active:translate-y-0  transition-all"
                >
                  Book a call
                </Link>

                {/* <button
                  onClick={handleLogin}
                  className="hidden sm:inline-flex items-center justify-center h-8 px-3 rounded-full bg-black text-white text-[13px] font-medium ring-1 ring-black/10 hover:bg-white hover:text-black  transition"
                >
                  Login
                </button> */}

                {/* Mobile toggle */}
                <button
                  aria-label="Open menu"
                  className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/10 text-black"
                  onClick={() => setOpen((v) => !v)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${open ? "block" : "hidden"} px-3 pb-3`}>
            <div className="mt-2 flex flex-col rounded-xl bg-white/75 backdrop-blur-md ring-1 ring-black/10 shadow-md overflow-hidden">
              <Link to="/" className="px-4 py-2.5 text-black/90 hover:bg-black/5" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" className="px-4 py-2.5 text-black/90 hover:bg-black/5" onClick={() => setOpen(false)}>About</Link>
              <Link to="/services" className="px-4 py-2.5 text-black/90 hover:bg-black/5" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/blog" className="px-4 py-2.5 text-black/90 hover:bg-black/5" onClick={() => setOpen(false)}>Blogs</Link>
              <Link to="/contact" className="px-4 py-2.5 text-black/90 hover:bg-black/5" onClick={() => setOpen(false)}>Contact</Link>
              <div className="flex gap-2 p-3">
                <Link to="/book" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center h-9 rounded-full bg-black text-white text-sm">Book a call</Link>
                {/* <button onClick={() => { setOpen(false); handleLogout(); }} className="flex-1 inline-flex items-center justify-center h-9 rounded-full bg-white text-black text-sm ring-1 ring-black/10">Logout</button> */}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* spacer for fixed header */}
      <div className="h-16 sm:h-16" />
    </>
  );
};

export default Navbar;
