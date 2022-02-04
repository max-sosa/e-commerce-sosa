import React from "react";
import { useState } from "react";
import { Card, Button} from "react-bootstrap";
import ItemCounter from "../ItemCounter";

const ItemDetail = ({product}) => {
    const [show, setShow] = useState(true);

    const {image, name, price, category, stock, model} = product;

    const onAdd = (counter)=> {
        setShow(false);
        alert(`${counter}`)
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin:'0.5rem'}}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
              <Card.Title style={{margin:'0.5rem'}}>{name}</Card.Title>
              <Card.Text>
                Categoria: {category}
                <br></br>
                Modelo: {model}
                <br></br>
                Precio:$ {price}
              </Card.Text>
              <Button variant="success" style={{margin:'0.5rem'}}>Ver detalle</Button>
              <ItemCounter stock={stock} />
            </Card.Body>
          </Card>
            
            {show ? <ItemCounter stock={stock} onAdd={onAdd}/> : <div>
                <Button>Terminar la Compra</Button>
                <Button>Seguir comprando</Button>
            </div>}
        </div>
)}