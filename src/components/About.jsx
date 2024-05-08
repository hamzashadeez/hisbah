import React, { useState } from "react";
import LanguageChanger from "./ChangeLangBtn";

function About() {
  const [aboutText, setAboutText] = useState(
    "Established to promote Islamic values and ensure public order within Katsina State, Hisbah Katsina, a government agency operating under Katsina State law, fosters a peaceful and morally upright environment for all residents. Our dedicated team works to uphold Islamic principles, enforce regulations that maintain a decent public space, safeguard community well-being, provide education and guidance on Islamic teachings, and collaborate with leaders, religious figures, and residents to achieve a shared vision for a prosperous and ethical Katsina."
  );

  return (
    <section className="">
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
            <img
              alt=''
              src='/02.jpeg'
              className='absolute inset-0 h-full w-full object-contain rounded-2xl overflow-hidden'
            />
          </div>
          <div className='lg:py-24 relative'>
            <div className="absolute top-[10%] left-0">
            <LanguageChanger textToChange={aboutText} textChange={setAboutText} />
            </div>
            <h2 className='text-3xl font-bold sm:text-4xl text-teal-900'>
              About Hisbah Katsina
            </h2>

            <p className='mt-4 mb-3 poppins-regular text-lg md:text-xl text-justify'>
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
