import React from 'react'
import { MoveRight } from 'lucide-react';

function Newsletter() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16'>
      <div>
        <div className='text-center'>
            <h2 className='lg:text-5xl text-3xl font-semibold mb-6'>Bussiness Is Th Backbone Of India</h2>        
            <div className='flex justify-center'>
      <button className='bg-cyan-900 text-white w-[200px] h-10 flex items-center justify-center'>
        Get a Demo <span className='inline-block ml-2'><MoveRight /></span>
      </button>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Newsletter