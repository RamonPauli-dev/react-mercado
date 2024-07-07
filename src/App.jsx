import { useState, useEffect } from "react";
import "./App.css";
import MarketList from "./components/MarketList";
import MarketInput from "./components/MarketInput";
import MarketHeader from "./components/MarketHeader";
import MarketTotalItems from "./components/MarketTotalItems";

function App() {
  const [marketList, setMarketList] = useState([]);

  useEffect(() => {
    // Atualiza o cálculo total toda vez que a lista é modificada
    calculateTotal();
  }, [setMarketList]);

  const addItem = (nameItem, price, quantity) => {
    // Converte o preço para float e garante que seja numérico com duas casas decimais
    const priceFloat = parseFloat(price).toFixed(2);

    // Calcula o valor total como número (não formatado como string)
    const totalValue = parseFloat(price * quantity).toFixed(2);

    const newList = [
      ...marketList,
      {
        id: Math.floor(Math.random() * 10000),
        nameItem,
        price: parseFloat(priceFloat), // Converte de volta para número
        quantity,
        totalValue: parseFloat(totalValue), // Garante que seja número
      },
    ];

    setMarketList(newList);
  };

  const removeItem = (id) => {
    const filteredList = marketList.filter((item) => item.id !== id);
    setMarketList(filteredList);
  };

  const calculateTotal = () => {
    const total = marketList.reduce((acc, item) => acc + item.totalValue, 0);
    // Retorna o total formatado para duas casas decimais
    return total.toFixed(2);
  };

  return (
    <div className="app">
      <h1>CALCULADORA PARA MERCADO</h1>
      <MarketInput addItem={addItem} />
      <MarketTotalItems total={calculateTotal()} />
      <MarketHeader />
      <div className="market-list">
        {marketList.map((item) => (
          <MarketList key={item.id} list={item} removeItem={removeItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
