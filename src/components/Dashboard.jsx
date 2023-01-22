import React,{useState,useEffect,useContext} from 'react'
import Search from './Search.jsx'
import { mockCompanyDetails } from '../constants/mock.js'
import Details from './Details.jsx'
import Overview from './Overview.jsx'
import Chart from './Chart.jsx'
import StockContext from './context/StockContext'
function Dashboard() {
  const{stockSymbol}=useContext(StockContext)
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-9 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
            
            <Search/>
            
            </div>
            <hr className="w-screen"></hr>
            <div className="md:col-span-2 row-span-4 xl:row-span-6">
            {/* <Card className="md:col-span-2 row-span-4" child="stock"/> */}
        {/* {data[1]?<Chart data={data}/> : <h1 className="text-center">Loading Chart...</h1>} */}
        <h1 className="text-blue-500 text-center">{stockSymbol}</h1>
        <Chart/>

        </div>
        <div className="py-40 xl:py-0">
        <Overview/>
        </div>
        <div className="py-60 md:py-40 xl:py-20">
            <Details details={mockCompanyDetails}/>
        </div>
    </div>
  )
}

export default Dashboard