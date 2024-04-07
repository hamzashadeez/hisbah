import React from "react";

function Mission() {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
            <img
              alt=''
              src='/01.jpeg'
              className='absolute inset-0 h-full w-full object-contain'
            />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold sm:text-4xl text-teal-900'>
              Our Mission
            </h2>

            <p className='mt-4 mb-3 poppins-semibold'>
              Hisbah Katsina is dedicated to promoting and upholding Islamic
              ethics and moral values within Katsina State. We strive to create
              a just and harmonious society by:
            </p>
            <ul className="text-gray-600 poppins-regular ul">
              <li>Encouraging compliance with Islamic law and principles.</li>
              <li>Promoting public decency and morality.</li>
              <li>Safeguarding the well-being of the community.</li>
              <li>Safeguarding the well-being of the community.</li>
              <li>Discouraging vice and harmful activities.</li>
              <li>Providing guidance and education on Islamic teachings.</li>
              <li>
                Collaborating with community members and stakeholders to achieve
                a shared vision of a prosperous and ethical Katsina.
              </li>
            </ul>
            <a
              href='#'
              className='mt-8 inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
