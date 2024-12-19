import React from 'react'
 
export const ContactMe = () => {
    return (
        <div className='bg-black rounded-xl m-3'>
            <div className='text-[40px] font-bold text-center font-serif'>Contact Me</div>
            <div className='md:grid md:grid-cols-2 md:m-3 w-screen'>
                <div className='md:flex md:flex-col md:gap-3 items-center'>
                    <label className='text-white' htmlFor="">Enter Email: </label>
                    <input type="email" className='p-2 m-4 w-fit' placeholder='Enter Email...'/>
                    <br />
                    <label className='text-white' htmlFor="">Enter Password: </label>
                    <input type="password" className='p-2 m-2 w-fit' placeholder='Enter Password...' />
                    <br />
                    <textarea name="" className='h-40 p-2 m-2 w-fit' placeholder='Enter the message you want to send........' id=""></textarea>
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
