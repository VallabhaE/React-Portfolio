import React from 'react'

const Project = ({
  link,
  img,
  name,
  desc
}) => {
  console.log(img)
  return (
    <div className='w-60  rounded-2xl border-t-8 border-solid m-4 hover:m-8 transition-all duration-150'>
      {/* Image Section */}
      <img
        src={img}
        alt=""
        className='h-32 w-full  object-cover rounded-t-2xl grayscale hover:grayscale-0 transition-all duration-150'
      />

      {/* Text Section with Enhanced Styling */}
      <div className='bg-blue-800 p-4 rounded-b-2xl'>
        <h1 className='text-white text-2xl font-semibold text-center mb-2'>{name}</h1>
        <p className='text-white   text-center'>{desc}</p>
      </div>
    </div>
  )
}

export default Project;
