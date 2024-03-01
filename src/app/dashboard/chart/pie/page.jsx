"use client"
import React from 'react'
import Pie1 from './pie1'
import Pie2 from './pie2'
import Pie3 from './pie3'
import Pie4 from './pie4'

export default function page() {
  return (
    <div className='flex justify-center *:bg-white flex-wrap *:m-3 *:lg:w-2/3 *:w-full'>
        <Pie1/>
        <Pie2/>
        <Pie3/>
        <Pie4/>
    </div>
  )
}
