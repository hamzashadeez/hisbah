import React from "react";
import logo from "../assets/hisbah.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


function Story() {
  return (
    <div id='story' className='bg-white min-h-screen relative'>
      <section className='sticky main_header top-0 left-0'>

      <header className='bg-[#F4FFFB] px-4 flex main_header flex-row items-center justify-between md:px-12 lg:px-24 h-24 sm:h-20 shadow-md'>
        <img src={logo} alt='Logo' className='w-20' />

        <Link
          to={"/"}
          className='bg-[#20665C] px-6 py-1.5 rounded-md text-white  '
        >
          Back
        </Link>
      </header>
      </section>

      <div className='md:px-12 lg:px-24 px-6 pt-12'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl'>
          Lorem ipsum dolor sit amet consectetur laboriosam suscipit nisi minus!
        </h1>
        <p className="text-gray-500 text-md mt-2">12th May, 2024</p>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='h-56 md:h-72 w-full object-cover my-10 rounded-2xl'
        />
        <p className="text-lg text-justify mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque
          odio beatae autem dolorem quia. Totam velit ullam temporibus earum
          debitis fugiat repellat dolor ea pariatur, hic nesciunt, praesentium
          nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Officia atque beatae sed earum aut iste cupiditate sunt eius, illo
          cumque iure! Dolorum earum exercitationem commodi nam saepe temporibus
          ea quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia, voluptates facere! Ad voluptas accusamus autem itaque nemo natus
          dolor alias doloremque voluptatum tempora nisi, quidem atque, eius
          adipisci blanditiis esse? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid eaque saepe laboriosam? In, expedita placeat
          tempora adipisci cum accusantium doloremque corrupti culpa natus, aut
          quod libero inventore eum illum consequuntur!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Story;
