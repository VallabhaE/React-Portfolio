import React from 'react'
import Project from './Project'
import one from "../assets/ZohoImages/one.jpg"
import { ProjectInfo } from './ProjectDetails.js'
const Projects = () => {
  return (
    <div>
        <div><h1 className='text-2xl font-bold text-center border m-2'>Projects</h1></div>
        <div className='flex gap-4 justify-center'>
            <div className='bg-blue-800 px-3 py-1 rounded-lg hover:px-7 text-white w-fit h-fit transition-all '>All</div>
            <div className='bg-blue-800 px-3 py-1 rounded-lg hover:px-7 text-white w-fit h-fit transition-all '>Full-Stack</div>
            <div className='bg-blue-800 px-3 py-1 rounded-lg hover:px-7 text-white w-fit h-fit transition-all '>Python</div>
            <div className='bg-blue-800 px-3 py-1 rounded-lg hover:px-7 text-white w-fit h-fit transition-all '>GoLang</div>
          </div>
        <div className='grid md:grid-cols-4 md:ml-10 justify-center'>
          
        {
          ProjectInfo.map((project,idx)=>{
            return <Project link={project.link} img={project.img} name={project.name} desc={project.desc} />

          })
        }
        </div>
    </div>
  )
}

export default Projects