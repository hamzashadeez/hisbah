import React from "react";
import logo from "../assets/hisbah.png";
import { CiMenuFries } from "react-icons/ci";

function Landing() {
  return (
    <div className='bg-white min-h-screen relative'>
      <header className='bg-[#F4FFFB] px-4 flex sticky top-0 left-0 flex-row items-center justify-between md:px-12 lg:px-24 h-24 shadow-md'>
        <img src={logo} alt='Logo' className='w-20' />
        <ul className='hidden md:flex flex-row gap-6'>
          <li>
            <a
              href='#'
              className='font-bold text-xl hover:text-teal-400 text-[#20665C]'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-bold text-xl hover:text-teal-400 text-[#20665C]'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-bold text-xl hover:text-teal-400 text-[#20665C]'
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-bold text-xl hover:text-teal-400 text-[#20665C]'
            >
              Donate
            </a>
          </li>
        </ul>
        <button className='text-[#20665C] md:hidden '>
          <CiMenuFries size={40} />
        </button>
      </header>

      <div className='border-2 my-12 w-3/4 md:w-1/2 lg:w-1/5 mx-auto border-[#20665C] text-[#20665C] font-bold text-sm py-1 rounded-full text-center'>
        Muslim Police Katsina Based
      </div>
      <div className='px-4 md:px-12 lg:px-36 flex flex-col items-center justify-center '>
        <h1 className='text-2xl md:text-5xl lg:text-7xl font-bold  text-center '>
          Promoting Morality and Public Order According to the Islamic Teachings
        </h1>
        <div className='text-sm md:text-md lg:text-lg mt-3 md:mt-6 text-center text-gray-600'>
          Safeguarding our communities through guidance, education, and
          enforcement.
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center mt-3 gap-3 md:gap-6 md:mt-5'>
        <button className='bg-[#20665C] px-6 font-bold rounded-full py-2.5 w-60 text-sm text-white'>
          Join Our Community
        </button>
        <button className='border-2 border-[#20665C] font-bold px-6 rounded-full w-60 py-2.5 text-sm text-[#20665C]'>
          Read Our Blog
        </button>
      </div>
    </div>
  );
}

export default Landing;
