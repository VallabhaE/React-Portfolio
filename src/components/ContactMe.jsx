import React from 'react'
 
export const ContactMe = () => {
    return (
        <div className='bg-black rounded-xl m-3'>
            <div className='text-[40px] font-bold text-center font-serif'>Contact Me</div>
            <div className='grid grid-cols-2 m-3'>
                <div className='flex flex-col gap-3'>
                    <label className='text-white' htmlFor="">Enter Email: </label>
                    <input type="email" className='p-2 m-2' placeholder='Enter Email...'/>
                    <label className='text-white' htmlFor="">Enter Email: </label>
                    <input type="password" className='p-2 m-2' placeholder='Enter Password...' />
                    <br />
                    <textarea name="" className='h-40 p-2 m-2' placeholder='Enter the message you want to send........' id=""></textarea>
                    <div className='flex justify-center w-full'>
                        <button className='bg-blue-700 p-3 rounded-xl'>Submit</button>
                    </div>
                </div>
                <div className='ml-52'>
                    <img src="/avatar.png" alt="" className='h-96' />
                </div>

            </div>
        </div>
    )
}
