import React, { useState } from "react";
import logo from "../assets/hisbah.png";
import { CiMenuFries } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Mission from "./Mission";
import About from "./About";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Officials from "./Officials";
import { CiGlobe } from "react-icons/ci";
import LanguageChanger from "./ChangeLangBtn";
import ContactUS from "./ContactUS";

function Landing() {
  const [show, setShow] = useState(false);
  const [hero, setHero] = useState(
    "Promoting Morality and Public Order According to the Islamic Teachings"
  );

  return (
    <div id="home" className="bg-white min-h-screen relative">
      <section className="sticky main_header top-0 left-0">
        <header className="bg-[#F4FFFB] px-4 flex main_header flex-row items-center justify-between md:px-12 lg:px-24 h-24 sm:h-20 shadow-md">
          <img src={logo} alt="Logo" className="w-20" />
          <ul className="hidden md:flex flex-row gap-6">
            <li>
              <a
                href="#home"
                className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#mission"
                relative="path"
                className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
              >
                Our Mission
              </a>
            </li>
            <li>
              <a
                href="#officials"
                className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
              >
                Team
              </a>
            </li>
           
            <li>
              <a
                href="#contact"
                className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="font-bold text-white px-4 py-2 rounded-md text-md hover:bg-teal-400 bg-[#20665C]"
              >
                Donate
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setShow(true)}
            className="text-[#20665C] md:hidden "
          >
            <CiMenuFries size={40} />
          </button>
        </header>
        <div
          className={`${
            show ? "left-0" : "left-[-100%] lg:left-0"
          } p-[20px] lg:p-0 top-0 w-full lg:hidden   bg-white lg:bg-transparent fixed lg:relative flex flex-col lg:flex-row items-start lg:items-center space-y-[30px] lg:space-y-0 h-screen lg:h-fit transition-all lg:space-x-[30px] z-50`}
        >
          <div className="w-full flex items-center justify-end">
            <button className="lg:hidden" onClick={() => setShow(false)}>
              <FiPlus className="rotate-45 text-[30px] text-primary/200" />
            </button>
          </div>

          <Link
            onClick={() => setShow(false)}
            className=" text-[18px] lg:text-[16px]  poppins-semibold whitespace-nowrap  text-end text-brand"
            to={"#"}
          >
            Home
          </Link>

          <Link
            onClick={() => setShow(false)}
            className=" text-[18px] lg:text-[16px]  poppins-semibold whitespace-nowrap  text-end text-brand"
            to={"#mission"}
            relative="path"
          >
            Our Mission
          </Link>
          <a
            onClick={() => setShow(false)}
            href="#officials"
            className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
          >
            Team
          </a>
          <a
            onClick={() => setShow(false)}
            href="#contact"
            className="font-bold text-xl hover:text-teal-400 text-[#20665C]"
          >
            Contact Us
          </a>
          <Link
            onClick={() => setShow(false)}
            className=" text-[18px] lg:text-[16px]  poppins-semibold whitespace-nowrap  text-end text-brand"
            to={"/login"}
          >
            Sign In
          </Link>

          <Link
            onClick={() => setShow(false)}
            className=" text-[18px] lg:text-[16px]  poppins-semibold whitespace-nowrap  text-end text-brand"
            to={"/donate"}
          >
            Donate
          </Link>
          {/* ))} */}
          <button className="p-[6px_25px] flex items-center space-x-[5px]  text-white bg-brand rounded-[8px]">
            <span> Login</span> <IoLogInOutline className="text-[25px]" />
          </button>
        </div>
      </section>

      {/* </div> */}
      <main className="bg-teal-50 pt-16 pb-24 main relative">
        <div className="absolute top-[10%] right-[10%]">
          <LanguageChanger textToChange={hero} textChange={setHero} />
        </div>
        <div className="border-2 mt-8 mb-12 w-3/4 md:w-1/2 lg:w-1/5 mx-auto border-[#20665C] text-[#20665C] font-bold text-sm py-1 rounded-full text-center">
          Muslim Police Katsina Based
        </div>
        <div className="px-4 md:px-12 lg:px-36 flex flex-col items-center justify-center ">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold leading-7 md:leading-9 text-center poppins-bold">
            {hero}
          </h1>
          <div className="poppins-regular text-sm md:text-md lg:text-lg mt-3 md:mt-6 text-center text-gray-600">
            Safeguarding our communities through guidance, education, and
            enforcement.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-3 gap-3 md:gap-6 md:mt-5">
          <Link
            to={"/join"}
            className="bg-[#20665C] px-6 text-center font-bold rounded-full py-2.5 w-60 text-sm text-white"
          >
            Join Our Community
          </Link>
          <Link
            to="#"
            className="border-2 border-[#20665C] text-center font-bold px-6 rounded-full w-60 py-2.5 text-sm text-[#20665C]"
          >
            Read Our Blog
          </Link>
        </div>
      </main>
      {/* ABOUT */}

      <About />
      {/* MISSION */}
      <div className="px-6 md:px-16">
        <img className="md:w-3/4 mx-auto" src="./hisbah.svg" alt="" />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="officials">
        <Officials />
      </div>
      <div id="contact">
        <ContactUS />
      </div>
      <Gallery />

      <Blog />
      <Footer />
      <div className="my-16">
        <h4 className="text-center text-lg">
          Powered By{" "}
          <a
            target="_blank"
            rel="noopener noreferrer" // Added for security
            href="https://synergates.ng" // Include the full URL with "https://"
            className="font-bold text-teal-700"
          >
            Synergates
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Landing;
