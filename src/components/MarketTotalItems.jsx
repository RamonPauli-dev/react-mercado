import React from "react";

function MarketTotalItems({ total }) {
  return (
    <div className='total-items' style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>Total da compra</div>
      <div>{total}</div>
    </div>
  )
}

export default MarketTotalItems;
