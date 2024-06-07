import React from 'react';
import img1 from '../../public/service/imag1.png';
import img2 from '../../public/service/imag2.png';
import img3 from '../../public/service/imag3.png';
import img4 from '../../public/service/imag4.png';
import img5 from '../../public/service/imag5.png';





function Server() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
       <div className='text-center my-8'>
        <h2 className='text-4xl font-semibold mb-2'> Our Clients</h2>
        <p className='text-green-500'>These all are Propuler People in India </p>
        <div className='my-10 flex flex-wrap justify-center items-center lg:gap-16 gap-2 '>
            <img src={img1} alt='image1'/>
            <img src={img2} alt='image2'/>
            <img src={img3} alt='image3'/>
            <img src={img4} alt='image4'/>
            <img src={img5} alt='image5'/>
        </div>
       </div>
        
     
     </div>
  )
}

export default Server