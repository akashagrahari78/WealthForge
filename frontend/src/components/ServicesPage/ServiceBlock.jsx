// src/components/Services/ServiceBlock.jsx
import React from "react";
import { motion } from "framer-motion"; 
import { item } from "./motionVariants";
// import services1 from '../../assets/services1.svg'


export const ServiceBlock = ({ s, index }) => (
   <motion.div
    variants={item}
    className={`flex flex-col md:flex-row ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    } items-center gap-8 md:gap-12`}
  >
    {/* This is the image side */}
    <div className="flex-1 flex items-center justify-center">
      
      <motion.img
        src= {s.img}
        alt={`${s.title} vector illustration`}
        className="w-[90%] max-w-xs md:max-w-sm"
         animate={{ y: [0, -8, 0] }}  
        transition={{
          duration: 3,             
          ease: "easeInOut",     
          repeat: Infinity,     
        }}
      />
    </div>

    {/* This is the text side */}
    <div className="flex-1">
      <h4 className="text-lg md:text-xl font-quicksand font-semibold text-black">{s.title}</h4>
      <p className="mt-2 text-sm md:text-base text-black/70">{s.desc}</p>
    </div>
  </motion.div>
);