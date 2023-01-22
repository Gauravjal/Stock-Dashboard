import React,{useState,useEffect,useContext} from 'react'
import { FcBarChart } from "react-icons/fc";
import StockContext from './context/StockContext'
function Overview() {
  const{stockSymbol}=useContext(StockContext)
  const [stockDetails,setStockDetails]=useState({});
const [quote,setQuote]=useState([]);
useEffect(()=>{
    const fetchData= async()=>{
      const kkeeyy="SB9I4MIXG3D7OISQ";
      let API_CALL=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${kkeeyy}`
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
          console.log(dataa);
          //console.log(arr);
          setQuote(dataa);
        }
      )
    }
    fetchData();
  },[stockSymbol])

  return (
    <div className="rounded-md relative p-8 border-2 border-neutral-200">
      <div className="flex gap-3">
      <h1>Current Price: {quote["Global Quote"] && quote['Global Quote']['05. price']}</h1>
      <button  className={`${quote['Global Quote'] && quote['Global Quote']['10. change percent']>0 ? "bg-green-500 text-white":"bg-red-600 text-white" } rounded-md p-1`}><h4>{quote['Global Quote'] && quote['Global Quote']['10. change percent']}</h4></button>
        </div>
        <h3 className="flex"><FcBarChart className="my-auto"/>  {quote['Global Quote'] && quote['Global Quote']['06. volume']}</h3>
        
        </div>
  )
}

export default Overview