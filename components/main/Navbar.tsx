'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }

    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] ${isScrolled ? 'backdrop-blur-md' : ''} z-50 px-4 md:px-10`}>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 md:px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            {/* <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            /> */}
            <span className="font-bold ml-2 md:ml-[10px] hidden md:block text-gray-300">
              Iyehah.
            </span>
          </a>

          <div className="flex items-center">
            <div className="hidden md:flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer px-2">
                About me
              </a>
              <a href="#skills" className="cursor-pointer px-2">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer px-2">
                Projects
              </a>
            </div>

            <div className="flex md:hidden">
              <button onClick={toggleMenu} className="text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute right-10 w-auto bg-[#0300145e] text-gray-200 py-2">
            <a href="#about-me" className="block px-4 py-2 border-b border-gray-700">
              About me
            </a>
            <a href="#skills" className="block px-4 py-2 border-b border-gray-700">
              Skills
            </a>
            <a href="#projects" className="block px-4 py-2">
              Projects
            </a>
          </div>
        )}
      </div>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-[#0300145e] text-gray-200 w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-[#7042f861] transition-colors z-[99]"
        >
          &#8593; {/* Up Arrow Icon */}
        </button>
      )}
    </div>
  );
};

export default Navbar;
