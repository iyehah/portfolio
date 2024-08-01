import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="flex flex-row gap-4 md:gap-5 z-10">
          
          <a href="https://www.facebook.com/Iyehah.Hacen" aria-label="LeetCode">
            <FaFacebook className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a href="https://github.com/iyehah" aria-label="GitHub">
            <FaGithub className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a href="mailto:iyehah@gmail.com" aria-label="Email">
            <MdAttachEmail className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a href="https://www.linkedin.com/iyehah" aria-label="Email">
            <FaLinkedin className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a href="https://leetcode.com/iyehah" aria-label="LeetCode">
            <SiLeetcode className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          </a>
          </div>
        </div>
        <div className="mb-[20px] text-[12px] text-center mt-5">
                &copy; iyehah . 2024 Inc. All rights reserved
        </div>
    </div>
  );
};

export default Footer;
