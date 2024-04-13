import React, { Children } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import { LuFileStack } from "react-icons/lu";

function DashboardLayout({ children }) {
  const navlinks = [
    {
      name: "Home",
      route: "/dashboard",
      icon: MdDashboard,
    },
    {
      name: "Membership",
      route: "/members",
      icon: IoPeople,
    },
    {
      name: "Donations",
      route: "/donations",
      icon: BiDonateHeart,
    },
    {
      name: "Reports",
      route: "/reports",
      icon: LuFileStack,
    },
  ];

  const location = useLocation();

  return (
    <div className='bg-gray-50 h-screen flex'>
      <section className='md:w-1/6 shadow-sm bg-white h-full py-6 px-10'>
        <h5 className='text-teal-600 font-bold uppercase text-lg'>
          Hisbah Katsina
        </h5>
        <div className='mt-12 flex flex-col gap-6'>
          {navlinks.map((item, index) => {
            const isActive = location.pathname === item.route; // Check for active route
            return (
              <Link
                to={item.route}
                key={index}
                className={`text-gray-700 flex items-center gap-3 p-2 rounded-md ${
                  isActive ? "bg-teal-600" : ""
                }`} // Add/remove background color based on isActive
              >
                <item.icon color={isActive ? "white" : "#444"} size={22} />
                <h4
                  className={`font-semibold text-lg ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </h4>
              </Link>
            );
          })}
        </div>
      </section>
      <main className='md:w-5/6'>{children}</main>
    </div>
  );
}

export default DashboardLayout;
