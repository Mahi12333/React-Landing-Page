import React from 'react'
import img1 from '../../public/Footer/icon-facebook.svg';
import img2 from '../../public/Footer/icon-instagram.svg';
import img3 from '../../public/Footer/icon-pinterest.svg';
import img4 from '../../public/Footer/icon-twitter.svg';
import img5 from '../../public/Footer/icon-youtube.svg';
import image from '../../public/Footer/logo.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='continer mx-auto bg-black'>
        <div className='flex  md:flex-row px-14 py-14 justify-between items-center flex-col-reverse gap-y-4'>
            <div className='flex flex-col md:gap-y-16 gap-y-4 '>
            <img src={image} alt='' />
            <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <Link to='#'>
              <img src={img1} className='h-8' alt='' />
            </Link>
            {/* Link 2 */}
            <Link to='#'>
              <img src={img2} className='h-8' alt='' />
            </Link>
            {/* Link 3 */}
            <Link to='#'>
              <img src={img3} className='h-8' alt='' />
            </Link>
            {/* Link 4 */}
            <Link to='#'>
              <img src={img4} className='h-8' alt='' />
            </Link>
            {/* Link 5 */}
            <Link to='#'>
              <img src={img5} className='h-8' alt='' />
            </Link>
            </div>        
            </div>   
            <div className='flex justify-around space-x-32'>
               <div className='flex flex-col space-y-3 text-white'>
               <Link to='#' className='hover:text-brightRed'>
              Home
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Pricing
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Products
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              About
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-brightRed'>
              Careers
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Community
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Privacy Policy
            </Link>
                </div> 
            </div>

          <div>
            <div className='flex flex-col gap-y-16 '>
            <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Go
              </button>
            </div>
          </form>
            
            <div className='hidden text-white md:block'>
            Copyright © 2022, All Rights Reserved
            </div>
                   
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer