"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  const imageVariants = {
    hidden: { opacity: 0.7 },
    visible: { opacity: 0.7 }
  };

  const animationDelay = 0.3;

  return (
    <div className="relative group">
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt='skill image'
        />
      </motion.div>
      
      {/* Name container */}
      <motion.div 
        className="absolute bottom- left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-opacity-50 rounded-lg mt-2 w-full" // Added w-full for full width
      >
        <span className="text-white text-[12px] px-2 py-1 ">{name}</span>
      </motion.div>
    </div>
  )
}

export default SkillDataProvider
