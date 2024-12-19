import React, { useEffect, useState } from 'react';
import one from '../assets/ZohoImages/one.jpg';
import two from '../assets/ZohoImages/two.jpg';
import { ABOUTMEINFO } from '../constents';

const AboutMe = () => {
  const [img, setImg] = useState(true); 

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prev) => !prev); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="md:h-[80vh] bg-black rounded-3xl m-2 md:flex justify-between ">

        <p className='text-white m-5 font-light p-6  w-full text-xl self-center font-serif'><h1 className='text-2xl font-bold '>About ME</h1><br /><p className=' '>{ABOUTMEINFO}</p></p>
      <img
        src={img ? one : two} 
        alt="Rotating Images"
        className="object-contain grayscale hover:grayscale-0  transition-all duration-150 rounded-3xl  h-3/5 self-center m-5 border border-white items-center  " 
      />
    </div>
  );
};

export default AboutMe;
