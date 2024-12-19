import React from 'react';

export const Home = () => {
  return (
    <div className='md:flex md:flex-col md:h-[100vh] justify-center md:ml-[30%]  '>
      <span className="flex font-bold text-[100px] w-48 ">
        Hello <img src="/hi.svg" alt="" className="h-[80px] mx-4" /> I'm
      </span>
      <p className="text-[80px] text-blue-700 text-center ml-40 w-48">Eswar</p>
      <div className="w-max">
        <h1 className="mt-3 animate-bounce animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-black font-bold">
          I am software Developer
        </h1>
      </div>
      <img src="/down.svg" alt="" className='absolute bottom-0 animate-bounce ml-[22%]' />
    </div>
  );
};
