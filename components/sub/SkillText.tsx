"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { GrTechnology } from "react-icons/gr";

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center px-4 md:px-0'>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        className='text-[24px] md:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        What My Programming Skills Included ?
      </motion.div>
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
      >
        <GrTechnology className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Making apps with modern technologies
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.5)}
        className=' text-[16px] md:text-[20px] text-gray-400 mb-10 mt-[10px] text-justify w-full md:w-2/5 px-4 md:px-0'
      >
        My programming skills allow me to create efficient and dynamic web and app solutions. I specialize in developing robust back-end systems and engaging front-end interfaces, ensuring a seamless user experience. With a strong emphasis on security and performance, my approach balances effort and time to deliver high-quality, scalable projects tailored to meet modern technological demands.
      </motion.div>
    </div>
  )
}

export default SkillText
