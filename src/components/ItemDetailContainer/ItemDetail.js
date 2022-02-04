import React from "react";
import { useState } from "react";
import ItemCounter from "../ItemCounter";

const ItemDetail = ({product}) => {
    const [show, setShow] = useState(true);

    const {image, name, price, category, stock} = product;

    const onAdd = (contador)=> {
        setShow(false);
        alert(`${contador}`)
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin: '20px'}}>
                <Card.Img variant="top" src={image} style={{ minHeight: '300px'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Categoria: {category}
                    </Card.Text>
            
                    <Card.Text>
                        {price}
                    </Card.Text>
                </Card.Body>
            </Card>
            
            {show ? <ItemCounter stock={stock} onAdd={onAdd}/> : <div>
                <Button>Terminar la Compra</Button>
                <Button>Seguir comprando</Button>
            </div>}
        </div>
)}