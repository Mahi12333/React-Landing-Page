import { useState } from 'react';
import companyLogo from '../../public/Footer/logo.svg';
import { Link } from 'react-router-dom';


function Navbar() {
    const [mobileDrawOpen, setMobileDrawOpen]=useState(false);
    const toogleNavbar=()=>{
        setMobileDrawOpen(!mobileDrawOpen);
    }

  return (
      <nav className='relative mx-auto  container p-6'>
        <div className='flex justify-between items-center '>
        {/* logo */}
        <div className=''>
          <img  src={companyLogo} alt='Company Logo' />
        </div>
        {/* items */}
        <div className='md:flex space-x-6 hidden'>
        <Link to='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Product
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            About Us
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Careers
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Community
          </Link>
        </div>
        {/* get start */}

        <Link
          to='#'
          className=' bg-brightRed rounded-full hover:bg-brightRedLight text-white py-4 px-5'
         >
          Get Started
        </Link>
               
        <button
          className={ 
            mobileDrawOpen
            ? 'open  hamburger md:hidden focus:outline-none'
            : ' hamburger md:hidden focus:outline-none'}
          onClick={toogleNavbar}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
        
      </div>

        <div className='md:hidden'>
        <div
          className={
            mobileDrawOpen
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link to='#'>Pricing</Link>
          <Link to='#'>Product</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Community</Link>
        </div>
       </div>
          
      </nav>
  )
}

export default Navbar