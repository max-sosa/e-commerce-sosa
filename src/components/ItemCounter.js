import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCounter = ({ stock}) => {
  const [counter, setCounter] = useState(1);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <Button variant="outline-success" onClick={minusCounter}>-</Button>
        <span style={{padding:'1rem'}}>{counter}</span>
        <Button variant="outline-success" onClick={plusCounter}>+</Button>
        <br></br>
        <Button onClick={()=> alert(`Estas ingresando en el carrito ${counter} vehiculo/s.`)} disabled={counter < 1 && 'disabled'} variant='outline-success' className='m-2'>Agregar al Carrito</Button>
      </div>
    </>
  );
};

export default ItemCounter;