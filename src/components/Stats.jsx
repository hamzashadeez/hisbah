import React from "react";
import ReportImage from "../assets/report.svg";
import ReportImage2 from "../assets/report2.svg";

const Box = ({ label, value, icon, chart }) => {
  return (
    <div className='bg-white shadow-sm rounded-lg px-4 py-2.5 '>
      <div className='flex items-center justify-between'>
        <p>{label}</p>
        <p>{icon}</p>
      </div>
      <h1 className='text-4xl my-2 font-semibold'>{value}</h1>
      {chart && (
        <div className='flex items-center justify-center py-1'>
          <img src={chart} alt='chart' className='w-3/5' />
        </div>
      )}
      <p className='text-gray-500 text-sm'>2% Increase</p>
    </div>
  );
};

function Stats() {
  return (
    <div className='grid grid-cols-1 w-full md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <Box label='Active Cases' value={35} />
        <Box label='Resolved Cases' value={102} />
      </div>
      <div className='flex flex-col gap-4'>
        <Box label='Total Members' value={1023} />
        <Box label='Donations' value={"N2,345,660"} />
      </div>

      <Box label='Reports' value={50} chart={ReportImage} />
      <Box label='Activities' value={105} chart={ReportImage2}  />
    </div>
  );
}

export default Stats;
