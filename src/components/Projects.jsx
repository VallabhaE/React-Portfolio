import React from 'react'
import Project from './Project'
import one from "../assets/ZohoImages/one.jpg"
const Projects = () => {
  return (
    <div>
        <div><h1 className='text-2xl font-bold text-center border m-2'>Projects</h1></div>
        <div className='grid grid-cols-4 ml-10'>
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />


        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />
        <Project img={one} name="yo" desc="This project i build for my personal Learning and i learned X and Y so to become Z" />

        </div>
    </div>
  )
}

export default Projects