import React from 'react'
import img1 from '../../public/Footer/avatar-anisha.png';
import img2 from '../../public/Footer/avatar-richard.png';
import img3 from '../../public/Footer/avatar-richard.png';
import { Link } from 'react-router-dom';

function Tesimonial() {
  return (
    <div className='mt-12'>
        <h1 className='text-center font-bold text-4xl'>What's Different About Manage?</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-24 md:gap-6 gap-16 md:ml-28 md:mr-28 ml-8 mr-8 '>
            <div className='rounded-lg bg-green-700 p-6 space-y-8 flex flex-col justify-center items-center'>
            <img src={img1} className='w-16 -mt-14' alt=''/>
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
            </div>
            <div className='rounded-lg bg-green-700 p-6 space-y-8 flex flex-col justify-center items-center'>
            <img src={img1} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
            </div>
            <div className='rounded-lg bg-green-700 p-6 space-y-8 flex flex-col justify-center items-center'>
            <img src={img1} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
            </div>
            </div>
           <div className='mt-10 flex justify-center'>
            <Link
              to='#'
              className='p-3 px-6 pt-3 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link>
            </div>
            <div className=' bg-brightRed px-16 py-14 flex md:flex-row flex-col items-center justify-between mt-16'>
                <div className='text-4xl font-bold text-white'>
                Simplify how your team works today
                </div>
                <div className='mt-6'>
                <Link
                to='#'
                className='p-3 px-6 pt-3 text-white bg-black rounded-full baseline hover:bg-brightRedLight'
                >
                Get Started
                </Link>
                </div>
            </div>
    </div>
  )
}

export default Tesimonial