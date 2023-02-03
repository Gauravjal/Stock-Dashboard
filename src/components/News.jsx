import React,{useState,useEffect,useContext} from 'react'
import { FcBarChart } from "react-icons/fc";
import StockContext from './context/StockContext'
function News() {
    const{stockSymbol}=useContext(StockContext)
    const [stockDetails,setStockDetails]=useState({});
  const [quote,setQuote]=useState([]);
  useEffect(()=>{
      const fetchData= async()=>{
        const kkeeyy="SB9I4MIXG3D7OISQ";
        let API_CALL=`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${stockSymbol}&apikey=${kkeeyy}`
        //https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=GOGL&apikey=SB9I4MIXG3D7OISQ
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
           
            //console.log(arr);
            let temp=[];
            for(let i=0;i<dataa.feed.length && i<3;i++)
            temp.push(dataa.feed[i]);
            setQuote(temp);
            console.log(dataa.feed);
            for(let i=0;i<temp.length;i++)
            console.log(temp[i]);
            //console.log(temp);
          }
        )
      }
      fetchData();
    },[stockSymbol])
  return (
    <ul className="rounded-md relative p-8 border-2 border-neutral-200">
       {quote.map((item, index) => (
        <div className="rounded-md" key={index}>
        <img src={item.banner_image} alt="banner"></img>
        <a
        className="text-blue-500 hover:text-red-200" 
        href={item.url}
      >
       {item.title}
      </a>
      <hr></hr>
      </div>))}
        {/* <li className="hover:text-blue-400 border-lime-400 rounded-md" key={index}>{item.title}</li> */}
      
    </ul>
  )
}

export default News