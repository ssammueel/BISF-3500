import React from 'react'

export const Scan = () => {
  return (
    <div>
        <form action="" className=' bg-slate-300 flex flex-col p-3 gap-3'>
            Ip Address:
           <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter ip address' />
            Start Port
            <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter start port' />
            End Port
            <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter End port' />
            <button className=''>Scan</button>
        </form>
    </div>
  )
}
