'use client'
import React, { createContext } from 'react';
import Sec1 from './sec1'
import Line from './linechart'
import Pie from './piechart'
import Grid from './grid'
import Grid2 from './grid2'
import Bar from './barchart'

export default function page() {
  return (
    <div>
      <Sec1 />
      <div className='w-full flex justify-evenly flex-wrap'>
        <div className='lg:w-7/12 flex py-5 justify-center bg-white'><Line /></div>
        <div className='lg:w-4/12 w-3/4 flex py-5 justify-center flex-wrap *:w-full bg-white'><Pie /><Grid /></div>
      </div>
      <div className='w-full flex justify-evenly flex-wrap my-5'>
        <div className='lg:w-4/12 w-3/4 flex py-5 justify-center flex-wrap *:w-full bg-white'><Bar /></div>
        <div className='lg:w-7/12 w-3/4 flex py-5 justify-center bg-white'><Grid2 /></div>
      </div>
      
    </div>
  )
}
