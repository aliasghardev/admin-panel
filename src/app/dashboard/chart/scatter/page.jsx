"use client"
import React from 'react'
import Scat1 from './scat1'
import Scat2 from './scat2'
import Scat3 from './scat3'

export default function page() {
  return (
    <div className='flex justify-center *:bg-white flex-wrap *:m-3 *:lg:w-2/3 *:w-full'>
        <Scat1/>
        <Scat3/>
        <Scat2/>
    </div>
  )
}
