import React from 'react';

export const Home = () => {
  return (
    <div className='md:flex md:flex-col md:h-[100vh] justify-center md:ml-[30%]  '>
      <span className="md:flex font-bold text-[100px] w-48 ">
        Hello <img src="/hi.svg" alt="" className="h-[80px] mx-4" /> I'm
      </span>
      <p className="text-[80px] text-blue-700 md:text-center md:ml-40 w-48">Eswar</p>
      <div className="w-max">
        <h1 className="mt-3 animate-bounce animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 md:text-5xl text-2xl text-black font-bold">
          I am software Developer
        </h1>
      </div>
      <img src="/down.svg" alt="" className='md:absolute md:bottom-0 animate-bounce ml-[22%]' />
    </div>
  );
};
