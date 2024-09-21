import React from 'react'
import numeral from 'numeral'
function CurrencyFormat({amount}) {
  const a = numeral(amount).format("$0,0.00");
  return (
    <div>{`${a} `}</div>
    
  )
}

export default CurrencyFormat