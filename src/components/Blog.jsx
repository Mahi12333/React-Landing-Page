import React from 'react'
import { blogs } from '../constants/index'


function Blog() {
  return (
    <div className='px-4 max-w-screen-2xl mx-auto my-12 lg:px-14'>
     <div className='text-center mx-auto'>
        <h2 className='text-4xl text-green-600 font-semibold mb-4'>Caring is The New Marketing</h2>
        <p className='text-xl text-gray-500 mx-auto mb-8'>Streamlines web development by providing a set of pre-designed utility classes. These classes enable rapid styling without writing custom CSS, promoting consistency and scalability.</p>
     </div>
     {/* all Blogs */}

     <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 item-center justify-center'>
        {
            blogs.map(blog=>
                <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.image} alt='image'  />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md mx-auto absolute left-0 right-0 -bottom-12 '>
                        <h3 className='font-semibold mb-3 text-green-700 '>{blog.title}</h3>
                    </div>
                </div>
            )
        }
     </div>
    </div>
  )
}

export default Blog