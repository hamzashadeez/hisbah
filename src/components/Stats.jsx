import React from "react";

const Box = ({label, value, icon}) => {
  return (
    <div className='bg-white shadow-sm rounded-lg px-4 py-2.5 '>
      <div className='flex items-center justify-between'>
        <p>{label}</p>
        <p>{icon}</p>
      </div>
      <h1 className="text-4xl my-2 font-semibold">{value}</h1>
      <p className="text-gray-500 text-sm">2% Increase</p>
    </div>
  );
};

function Stats() {
  return (
    <div className='grid grid-cols-1 w-full md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <Box label="Active Cases" value={405} />
        <Box label="Resolved Cases" value={405} />
      </div>
      <div className='flex flex-col gap-4'>
      <Box label="Total Members" value={405} />
      <Box label="Donations" value={405} />
      </div>

      <Box label="Members" value={405} />
      <Box label="Donations" value={405} />
    </div>
  );
}

export default Stats;
