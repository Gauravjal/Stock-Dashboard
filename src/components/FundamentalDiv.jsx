import React from 'react'

function FundamentalDiv({name,child}) {
  return (
    <div className="grid grid-cols-2 rounded-md border-2 px-9 py-3 bg-pink-200">
                <p className="text-start text-sm font-semibold">{name}:</p>
               <p className="flex justify-start text-right text-sm">{child}</p>
            
            </div>
  )
}

export default FundamentalDiv