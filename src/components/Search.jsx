import React from 'react'
import {useState} from 'react'
import { FcSearch} from 'react-icons/fc';
import { MdClear} from 'react-icons/md';
import DisplayBestMatches from './DisplayBestMatches.jsx';
import { searchSymbol } from '../API/stockAPI.js';
function Search() {
    const [input,setInput]=useState("");
    const [bestMatches,setBestMatches]=useState([]);
    function clear(){
        setInput("");
        setBestMatches([]);
    }

    const updateBestMatches=async()=>{
        try{
          
            if (input) {
                // const searchResults = await searchSymbol(input);
                // const result = searchResults.result;
                const kkeeyy="SB9I4MIXG3D7OISQ";
        let API_CALL=`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${kkeeyy}`
        console.log(API_CALL);
        await fetch(API_CALL)
        .then(
          function(response){
            //console.log(response.json);
            return response.json();
          }
        )
        .then(
          function(detailsa){
            console.log("details=",detailsa.bestMatches);
            setBestMatches(detailsa.bestMatches);
          }
        )
      }
              }
        catch(error){
            setBestMatches([]);
            console.log(error);
        }
    }

  return (
    <div className="w-screen place-content-center relative flex justify-center px-10 py-10">
        <input
        type="text"
        value={input}
        className="shadow-xl bg-blue-100 h-10 px-5 pr-10 text-sm focus:outline-none border-x-amber-900"
        
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
        {input && <button className="position-absolute top-0 right-0 bg-blue-100 px-1" onClick={clear}><MdClear/></button>}
        <span className="shadow-xl flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100"><button className="position-absolute top-0 right-0" onClick={updateBestMatches}><FcSearch  className="fill-current"/></button></span>
        <br></br>
        {input && bestMatches.length>0 ? <DisplayBestMatches results={bestMatches} />:null}

  
    </div>
      

  )
}

export default Search