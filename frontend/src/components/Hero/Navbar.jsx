import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/pragya_logo.jpeg";
 
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);
  
  // Scroll effect for navbar elevation
  useEffect(() => {
    const onScroll = () => {
      setIsElevated(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] md:w-[88%] max-w-6xl">
        <nav
          className={`
            rounded-full border backdrop-blur-lg
            ${isElevated
              ? "bg-white/80 shadow-lg border-white/20"
              : "bg-white/50 shadow-md border-white/40"
            }
            transition-all duration-300
          `}
        >
          <div className="mx-auto flex h-12 items-center justify-between px-3 sm:px-4">
            {/* Logo and Brand Name */}
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden ring-1 ring-black/5 shadow">
                <img
                  src={logo}
                  alt="Pragya Financial Services Logo"
                  className="h-full w-full object-cover"
                />
              </span>
              {/* UPDATED: Always visible brand name */}
              <span className="text-xs sm:text-sm tracking-tight text-black">
                Pragya <span className="font-semibold">Financial Services</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
className="relative px-4 py-2 text-sm text-black/80 hover:text-black transition-colors
  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0
  after:h-[1px] after:bg-black after:transition-all after:duration-300
  hover:after:w-full"

                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center h-8 px-4 rounded-xl bg-black text-white text-[13px] font-medium ring-1 ring-black/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                Book a call
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="relative h-4 w-4 transform -translate-x-1.5"
                >
                  <motion.span
                    variants={{ closed: { y: 0, rotate: 0 }, open: { y: 4, rotate: 45 } }}
                    className="absolute h-px w-full bg-black"
                    style={{ top: "25%" }}
                  />
                  <motion.span
                    variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                    className="absolute h-px w-full bg-black"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  />
                  <motion.span
                    variants={{ closed: { y: 0, rotate: 0 }, open: { y: -4, rotate: -45 } }}
                    className="absolute h-px w-full bg-black"
                    style={{ bottom: "25%" }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <MobileMenu navLinks={navLinks} closeMenu={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

// Separate component for the mobile menu overlay
const MobileMenu = ({ navLinks, closeMenu }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 bg-white z-50 p-4"
  >
    {/* Menu Header */}
    <div className="flex items-center justify-between">
      <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden ring-1 ring-black/5 shadow">
          <img
            src={logo}
            alt="Pragya Financial Services Logo"
            className="h-full w-full object-cover"
          />
        </span>
        <span className="text-sm tracking-tight text-black">
          Pragya <span className="font-semibold">Financial Services</span>
        </span>
      </Link>
      <button
        aria-label="Close menu"
        onClick={closeMenu}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Navigation Links & CTA */}
    <div className="mt-8">
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-lg font-medium text-black/90 hover:bg-black/5"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      
      {/* UPDATED: "Book a call" button now appears after the links */}
      <div className="mt-6">
        <Link
          to="/book"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="flex w-full items-center justify-center rounded-xl bg-black py-3.5 text-base font-medium text-white"
        >
          Book a call
        </Link>
      </div>
    </div>
  </motion.div>
);

export default Navbar;
