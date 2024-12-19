import React from 'react'
import { ABOUTMEINFO, SKILLS } from '../constents'

const Skills = () => {
    return (
        <>
            <h1 className='font-bold text-[40px] text-center font-serif'>SKills</h1>
            <div className='grid md:grid-cols-2 gap-3 grid-cols-1'>
                <>
                    <div className='grid grid-cols-4 '>
                        {SKILLS.map((skill, idx) => {
                            if (idx % 9 == 0) return <div className=' m-2 h-10 w-fit font-bold text-center bg-[#086788] inline-block p-2 border col-span-2 rounded-xl'>
                                {skill}
                            </div>
                            return <div className='m-2 h-10 w-fit bg-[#086788] text-center  font-bold inline-block p-2 border rounded-xl'>
                                {skill}
                            </div>
                        })}
                    </div>

                </>                <div>
                    <h1 className='text-center text-2xl font-bold'>{"<"}Developer{"/ >"}</h1>
                    <p className='p-5 font-sans text-xl'>{ABOUTMEINFO}</p>
                </div>

            </div>

        </>)
}

export default Skills