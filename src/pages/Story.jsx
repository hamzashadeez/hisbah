import React, { useEffect, useState } from "react";
import logo from "../assets/hisbah.png";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { stories } from "../../storiesData";


function Story() {
  let { postId } = useParams();
  const [data, setData] = useState({})

  useEffect(()=>{
    setData(stories[postId])
  },[])

  return (
    <div id='story' className='bg-white min-h-screen relative'>
      <section className='sticky main_header top-0 left-0'>

      <header className='bg-[#F4FFFB] px-4 flex main_header flex-row items-center justify-between md:px-12 lg:px-24 h-24 sm:h-20 shadow-md'>
        <img src={logo} alt='Logo' className='w-20' />

        <Link
          to={"/#stories"}
          className='bg-[#20665C] px-6 py-1.5 rounded-md text-white  '
        >
          Back
        </Link>
      </header>
      </section>

      <div className='md:px-12 lg:px-24 px-6 pt-12'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl'>
          {data.title}
        </h1>
        <p className="text-gray-500 text-md mt-2">12th May, 2024</p>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='h-56 md:h-72 w-full object-cover my-10 rounded-2xl'
        />
        <p className="text-lg text-justify mb-10">
         {data.body}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Story;
