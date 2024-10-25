import React from 'react'
import { Scan } from './Scan'

export const Home = () => {
  return (
    <div className='bg-white'>
        <section className='fixed z-10 bg-white top-0 w-full p-[1%] flex shadow-lg  gap-[3%]'>
            {/* <img className="w-[10%] h-[1%]" src="../images/Ncba1.png" alt="NCBA Logo" /> */}
            <h1 className='w-[19%] pl-10 font-bold text-2xl'>NPAP </h1>
            <div className="w-[55%] h-5">
              <ul className='flex justify-between text-xl '>
                <li>Home</li>
                <li>Features</li>
                <li>Documentations</li>
                <li>news</li>
                <li>contacts</li>
              </ul>
            </div>

            <div className="w-[20%] h-5 flex justify-center gap-6">

              <div className="avatar flex justify-center w-10 h-10">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <h1>sign sam</h1>
            </div>        
        </section>

        <section className='mt-[58px] py-[0%] pr-[10%]'>
          <Scan/>
        </section>
    </div>
  )
}
