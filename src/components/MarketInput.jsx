import { useState } from "react";

function MarketInput({ addItem }) {
  const [nameItem, setNameItem] = useState("");
  const [valueItem, setValueItem] = useState("");
  const [quantityItem, setQuantityItem] = useState("");
  const [availableItems, setAvailableItems] = useState([
    "Arroz", "Feijão", "Carne", "Frango", "Peixe", "Ovos",
    "Leite", "Pão", "Café", "Açúcar", "Sal", "Óleo de cozinha",
    "Farinha de trigo", "Macarrão", "Sabonete", "Shampoo",
    "Papel higiênico", "Detergente", "Esponja de cozinha",
    "Alho", "Cebola", "Tomate", "Batata", "Cenoura",
    "Maçã", "Banana", "Laranja", "Abacaxi", "Morango"
  ]);

  const handleQuantityChange = (e) => {
    const inputValue = e.target.value;

    // Verificar se o valor é um número válido e positivo
    if (/^\d+$/.test(inputValue) || inputValue === "") {
      setQuantityItem(inputValue);
    }
  };

  const handleValueChange = (e) => {
    const inputValue = e.target.value;

    // Verificar se o valor é um número válido
    if (!isNaN(inputValue)) {
      setValueItem(inputValue);
    }
  };

  const handleNameChange = (e) => {
    const selectedName = e.target.value;
    setNameItem(selectedName);

    // Remover o item selecionado da lista de opções disponíveis
    setAvailableItems(prevItems => prevItems.filter(item => item !== selectedName));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameItem || !valueItem || !quantityItem) return;

    // Adicionar o item, convertendo valueItem e quantityItem para números
    addItem(nameItem, parseFloat(valueItem), parseInt(quantityItem));

    // Limpar os campos
    setNameItem("");
    setValueItem("");
    setQuantityItem("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="list-input">
        <div className="input-group">
          <select
            value={nameItem}
            onChange={handleNameChange}
            className="name-select"
          >
            <option value="">Selecione um item</option>
            {availableItems.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="ou digite aqui"
            value={nameItem}
            onChange={(e) => setNameItem(e.target.value)}
          />
          <input
            type="text"
            placeholder="valor do item"
            value={valueItem}
            onChange={handleValueChange}
          />
          <input
            type="number"
            placeholder="quantidade"
            value={quantityItem}
            onChange={handleQuantityChange}
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}

export default MarketInput;
