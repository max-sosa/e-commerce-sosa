import {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";


const Item = ({id, image, name, price, category, model, stock}) => {
  const [stockSelected, setStockSelected] = useState(0);

  return (
    <>
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
              <Button variant="outline-dark" style={{margin:'0.5rem'}}><Link to={`/item/${id}`}> Ver detalle </Link></Button> 
              <ItemCounter stock={stock} setStockSelected={setStockSelected}/>
            </Card.Body>
          </Card>
    </>
  );
};

export default Item;
