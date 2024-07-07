import React from "react";

function MarketList({ list, removeItem }) {
  return (
    <div className="line-item">
      <div className="content">
        <p>{list.nameItem}</p>
      </div>
      <div className="content">
        <p>{list.price}</p>
      </div>
      <div className="content">
        <p>{list.quantity}</p>
      </div>
      <div className="content">
        <p>{list.totalValue}</p>
      </div>
      <div>
        <button className="remove" onClick={() => removeItem(list.id)}>x</button>
      </div>
    </div>
  );
}

export default MarketList;
