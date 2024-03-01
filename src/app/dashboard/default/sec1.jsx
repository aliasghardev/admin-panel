import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Master() {

    const data1 = [
        { cash: 17.85, per: 2.4, p: 'Potential growth' },
        { cash: 12.35, per: 3.5, p: 'Revenue current' },
        { cash: 17.85, per: 11, p: 'Daily Income' },
        { cash: 31.53, per: 3.5, p: 'Expense current' }
      ]

  return (
    <main>
      <div className="flex justify-evenly w-full p-3 flex-wrap">
        {data1 && data1.map((val) => {
          return (
            <div className="lg:w-1/5 w-5/12 p-2 m-1 border rounded-lg *:p-3 bg-white">
              <h3 className="w-full flex justify-around font-bold lg:text-2xl">${val.cash} <span className="text-green-900 text-xl">+{val.per}%</span><span className="text-white bg-blue-600 p-2 rounded-xl"><TrendingUpIcon /></span></h3>
              <p className="text-slate-600">{val.p}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
