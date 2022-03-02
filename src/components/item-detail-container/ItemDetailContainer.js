
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { CartContext } from "../context/CartContext";
import ItemCounter from "../ItemCounter";

function ItemDetailContainer() {
  const { products } = useProducts();
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity,
    });
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <p>{selectedItem && selectedItem.name}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
      <ItemCounter
        stock={selectedItem?.stock || 10}
        setStockSelected={setQuantity} />
      <input onChange={handleUserName} value={userName} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;