import React from 'react'


const OfficialInfo = ({name, title, picture})=>{
    return(
        <div className=' rounded-md cursor-pointer'>
            <img src={picture? picture: './avatar.jpg'} className='w-full h-52 ' style={{objectFit: "cover"}}/>
            <div>
                <h4 className='font-bold mt-2 text-md text-brand capitalize'>{name}</h4>
                <p className='text-gray-500 text-[12px]'>{title}</p>
            </div>
        </div>
    )
}

function Officials() {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
         <h2 className='text-3xl font-bold sm:text-4xl text-teal-900'>
              Meet Our Officials
            </h2>
        <div className='grid grid-cols-1 mt-6  md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12'>
            <OfficialInfo picture={"./commander.jpg"} name={"Dr Aminu Usman Abu-Ammar"} title="General Commandant" />
            <OfficialInfo picture={"./DAS.png"}/>
            <OfficialInfo />
            <OfficialInfo />
            <OfficialInfo />
            <OfficialInfo />
        </div>
        </div>
  )
}

export default Officials