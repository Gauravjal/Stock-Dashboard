import React,{useState} from 'react'
import Dashboard from './components/Dashboard'
import StockContext from './components/context/StockContext'
function App() {
  const [stockSymbol,setStockSymbol]=useState("AAPL");

  return (
    <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
    <Dashboard/>
    </StockContext.Provider>
  )
}

export default App