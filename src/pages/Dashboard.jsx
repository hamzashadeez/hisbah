import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/hisbah.png";
import Stats from "../components/Stats";

function Dashboard() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
    });
  }, []);

  //   if (!session) {
  //     navigate("/login");
  //     return;
  //   }
  return (
    <div className='bg-gray-50 h-screen w-full flex flex-col relative'>
      <header className="sticky top-0 w-full right-0 px-10 py-4 bg-white shadow-sm">
      <div className='flex items-center justify-between w-full lg:w-5/6 mx-auto '>
        <h2 className='font-semibold text-lg  poppins-semibold '>Dashboard</h2>
      </div>

      </header>
      <div className="px-10 py-12 w-full lg:w-5/6 mx-auto ">
      <Stats />

      </div>
    </div>
  );
}

export default Dashboard;
