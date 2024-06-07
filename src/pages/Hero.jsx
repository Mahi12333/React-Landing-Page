import React from 'react'
import img1 from '../../public/Footer/illustration-intro.svg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container mx-auto mt-10 '>
        <div className='flex md:flex-row flex-col-reverse space-y-0 px-6 items-center'>
        <div className='md:w-1/2 flex flex-col space-y-12'>
         <h1 className='max-w-md md:text-5xl text-3xl md:text-left font-bold text-center'>Bring everyone together to build better products</h1>
         <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
         <div className='flex justify-center md:justify-start'>
         <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link>
            </div>
        </div>
        <div className='md:w-1/2'>
            <img src={img1} alt='image' />
        </div>
        </div>
    </div>
  )
}

export default Hero