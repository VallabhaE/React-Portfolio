import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between h-1/6 bg-[#086788] w-full'>
        <h1 className='text-3xl font-semibold p-3 text-white'>{"<"} REV {"/ >" }</h1>
        <a href="/"><img src="/download.png" alt="" className='items-center h-14 cursor-pointer'/></a>
    </div>
  )
}

export default NavBar