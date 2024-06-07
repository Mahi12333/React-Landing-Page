import React from 'react';
import img1 from '../../public/home/ffffff.png';
import { Carousel } from "flowbite-react";


function Home() {
  return (
     <div className=''>
      <div className='px-4 lg:px-14 max-w-screen-3xl max-h-screen h-screen mx-auto'>
        <Carousel className='mx-auto w-full'>
          <div className="lg:my-28 py-12 md:my-8 flex flex-col justify-center items-center gap-12 md:flex-row lg:flex-row-reverse">
            <div className='w-full md:w-1/2 flex justify-center'>
              <img src={img1} className='w-full max-w-md lg:max-w-none lg:h-[500px] object-contain' />
            </div>
            <div className='w-full md:w-1/2 px-4 text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-gray-500 leading-snug'>
                Disallow Unused Variables <span className='text-green-600'>(no-unused-vars)</span>
              </h1>
              <p className='text-base text-gray-600 mb-8'>
                Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.
              </p>
              <button className='px-7 py-2 bg-green-900 text-white rounded hover:bg-amber-800 transition-all duration-300 hover:-translate-y-4'>
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:my-28 py-12 md:my-8 flex flex-col justify-center items-center gap-12 md:flex-row lg:flex-row-reverse">
            <div className='w-full md:w-1/2 flex justify-center'>
              <img src={img1} className='w-full max-w-md lg:max-w-none lg:h-[500px] object-contain' />
            </div>
            <div className='w-full md:w-1/2 px-4 text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-gray-500 leading-snug'>
                Disallow Unused Variables <span className='text-green-600'>(no-unused-vars)</span>
              </h1>
              <p className='text-base text-gray-600 mb-8'>
                Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.
              </p>
              <button className='px-7 py-2 bg-green-900 text-white rounded hover:bg-amber-800 transition-all duration-300 hover:-translate-y-4'>
                Learn More
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home