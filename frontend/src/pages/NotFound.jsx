import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NotFoundImage from '../assets/NotFoundImage.svg' 

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center bg-white px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={NotFoundImage} 
          alt="404 Not Found Illustration"
          className="w-full max-w-xs sm:max-w-sm mx-auto mb-8"
        />
        <h1 className="text-5xl sm:text-6xl font-bold text-black tracking-tight">
          404
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-black/70">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-base text-black/60">
          It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-black/90"
        >
          Go back to Homepage
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
