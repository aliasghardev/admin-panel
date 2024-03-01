"use client"
import React from 'react'
import Line1 from './line1'
import Line2 from './line2'
import Line3 from './line3'
import Line4 from './line4'

export default function page() {
  return (
    <div className='flex justify-center *:bg-white flex-wrap *:m-3 *:lg:w-2/3 *:w-full'>
        <Line1/>
        <Line2/>
        <Line3/>
        <Line4/>
    </div>
  )
}
