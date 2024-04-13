import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/hisbah.png";

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
    <div className='bg-gray-50 h-screen flex flex-col'>
      <div className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
     <h2 className="font-semibold text-lg uppercase">Dashboard</h2>

      </div>
    </div>
  );
}

export default Dashboard;
