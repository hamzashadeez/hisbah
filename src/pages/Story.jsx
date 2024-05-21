import React from "react";
import logo from "../assets/hisbah.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Story() {
  return (
    <div id="story" className="bg-white min-h-screen relative">
      <section className="sticky main_header top-0 left-0">
        <header className="bg-[#F4FFFB] px-4 flex main_header flex-row items-center justify-between md:px-12 lg:px-24 h-24 sm:h-20 shadow-md">
          <img src={logo} alt="Logo" className="w-20" />

          <Link
            to={"/"}
            className="bg-[#20665C] px-6 py-1.5 rounded-md text-white  "
          >
            Back
          </Link>
        </header>
      </section>

      <div className="md:px-12 lg:px-24 px-6 pt-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          From Addiction to Ambition: Hisbah Board Empowers Women
        </h1>
        <p className="text-gray-500 text-md mt-2">12th May, 2024</p>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56 md:h-72 w-full object-cover my-10 rounded-2xl"
        />
        <p className="text-lg text-justify mb-10">
          Six Katsina women who previously struggled with drugs and other
          negative behaviors have undergone a remarkable transformation thanks
          to the intervention of the Hisbah Board. These women, who faced
          challenges due to financial hardship and neglect, were assisted in
          acquiring valuable skills that have given them the ambition to achieve
          financial independence.
        </p>
        <p>
          The Hisbah Board is proud to witness their journey towards becoming
          responsible individuals. We are committed to providing ongoing support
          through close monitoring, counseling, and any other necessary
          assistance to ensure these women continue on their path of
          self-improvement.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Story;
