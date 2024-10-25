import React from 'react'
import { useState } from 'react';
import { Ranget, Specific } from './Ports';

export const Scan = () => {

  return (
    <div className='flex gap-[3%]'>

      <section className='w-[15%] bg-white h-[200px] p-[2%]'>

        <ul>
          <li>Scan</li>
          <li>1. Specific Port</li>
          <li>2. Range Ports</li>
        </ul>

      </section>

      {/* <Specific/> */}
        <Ranget/>

        <section className='w-[50%]'>
          <div className='w-[] p-11 shadow'>
            <h2 className='text-xl'>Port</h2>
            <p>port 20, 40, 30 ,59</p>
          </div>
        </section>

    </div>
  )
}
