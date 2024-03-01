"use client"
import React from 'react'
import Bar1 from './bar1'
import Bar2 from './bar2'
import Bar3 from './bar3'

export default function page() {
  return (
    <div className='w-full flex flex-wrap *:w-2/3 *:bg-white *:m-3'>
        <Bar1/>
        <Bar2/>
        <Bar3/>
    </div>
  )
}
