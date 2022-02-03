import { useState } from "react";
import Item from "../item";

const items = [
  { id: "1", name: "iPhone X", price: "999.99", createdBy: "Apple", stock: 15},
  { id: "2", name: "iPhone XS", price: "888.99", createdBy: "Apple", stock: 15 },
  { id: "3", name: "Galaxy Note", price: "888.00", createdBy: "Samsung", stock: 15 },
  { id: "4", name: "Redmi Note 8", price: "300.00", createdBy: "Xiaomi", stock: 15},
];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div >
      <div className = "seleccionProductos">
        <h1>Lista de productos</h1>
        <h3>Producto seleccionado</h3>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.price : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.id : "Ninguno"}</p>
      </div>
      {items.map(({ id, name, price, stock }) => (
      <>
        <Item
          key={id}
          id={id}
          name={name}
          price={price}
          setSelectedItem={setSelectedItem}
          stock={stock}
        />
      </>
      ))}
    </div>
  );
};

export default ItemListContainer;