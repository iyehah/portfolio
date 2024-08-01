'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SiLeetcode } from 'react-icons/si';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaCode } from 'react-icons/fa';
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/iyehah_CV.pdf'; // Path to your CV file
    link.download = 'iyehah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90"
        >
          <FaCode className="text-[#b49bff] mr-2 h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-xs md:text-base">
            Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.3)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-md md:max-w-xl w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-md md:max-w-xl"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-5"
        >
          <motion.a
            variants={slideInFromLeft(0.9)}
            onClick={downloadCV}
            className="py-2 px-4 md:px-6 lg:px-8 button-primary flex items-center justify-around text-white cursor-pointer rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Download CV {" "}
            <ArrowDownTrayIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5 ml-2" />
          </motion.a>
          <motion.p className="flex flex-row gap-4 md:gap-5">
            <motion.a href="https://www.facebook.com/Iyehah.Hacen" aria-label="Facebook">
              <FaFacebook className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            </motion.a>
            <motion.a href="https://github.com/iyehah" aria-label="GitHub">
              <FaGithub className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/iyehah" aria-label="LinkedIn">
              <FaLinkedin className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            </motion.a>
            <motion.a href="https://stackoverflow.com/users/22234824/iyehah-hacen" aria-label="Stack Overflow">
              <FaStackOverflow className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            </motion.a>
            <motion.a href="https://leetcode.com/iyehah" aria-label="LeetCode">
              <SiLeetcode className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            </motion.a>
          </motion.p>
        </motion.div>
        <div className="flex flex-row gap-4 md:gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full h-full flex select-none justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          layout="intrinsic"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
