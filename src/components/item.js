import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCounter from "./ItemCounter";

const Item = ({ prod }) => {
  const {id, image, name, price, category,model, stock} = prod;

  return (
      <Card style={{ width: '18rem', margin: '1rem'}}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                Categoria: {category}
                <br></br>
                Modelo: {model}
                <br></br>
                Precio:$ {price}
            </Card.Text>
            <Button variant="success" style={{margin:'1rem'}}>Ver detalle</Button>
            <ItemCounter stock={stock} />
        </Card.Body>
        </Card>
  );
};

export default Item;