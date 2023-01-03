import React,{useState,useEffect,useContext} from 'react'
import Search from './Search.jsx'
import { mockCompanyDetails } from '../constants/mock.js'
import Details from './Details.jsx'
import Overview from './Overview.jsx'
import Chart from './Chart.jsx'
import StockContext from './context/StockContext'
import { fetchQuote, fetchStockDetails } from '../API/stockAPI.js'
function Dashboard() {
    const{stockSymbol}=useContext(StockContext)
    const [stockDetails,setStockDetails]=useState({});
    const [quote,setQuote]=useState({});
  const [data,setData]=useState([]);
  useEffect(()=>{
      const fetchData= async()=>{
        const kkeeyy="SB9I4MIXG3D7OISQ";
        let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=full&apikey=${kkeeyy}`
        console.log(API_CALL);
        await fetch(API_CALL)
        .then(
          function(response){
            //console.log(response.json);
            return response.json();
          }
        )
        .then(
          function(dataa){
            //console.log("data=",dataa);
            const t=[];
            
            console.log(dataa);
            for(var key in dataa['Time Series (Daily)']){
            //t.push(dataa['Time Series (Daily)'][key]);
            const obj={
              x:key,
              y:[dataa['Time Series (Daily)'][key]['1. open'],
              dataa['Time Series (Daily)'][key]['2. high'],
              dataa['Time Series (Daily)'][key]['3. low'],
              dataa['Time Series (Daily)'][key]['4. close'],
            ]
            }
            t.push(obj);
            }
            const t1=[]
            for(let i=0;i<365;i++)
            t1.push(t[i]);
            console.log("t1",t1.length)
            const arr=[{
              data:t1
            }]
            //console.log(arr);
            setData(arr);
            console.log("check",data[1])
          }
        )
      }
      fetchData();
    },[stockSymbol])
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
            
            <Search/>
            
            </div>
            <hr className="w-screen"></hr>
            <div className="md:col-span-2 row-span-4 xl:row-span-6">
            {/* <Card className="md:col-span-2 row-span-4" child="stock"/> */}
        {/* {data[1]?<Chart data={data}/> : <h1 className="text-center">Loading Chart...</h1>} */}
        <h1 className="text-blue-500 text-center">{stockSymbol}</h1>
        <Chart data={data}/>
        </div>
        <div className="py-20 xl:py-0">
        <Overview/>
        </div>
        <div className="py-40 md:py-20 xl:py-20">
            <Details details={mockCompanyDetails}/>
        </div>
    </div>
  )
}

export default Dashboard