import { Card, Button } from "react-bootstrap";
import ItemCounter from "./ItemCounter";

const Item = ({ name, price, id, setSelectedItem, stock }) => {
  const selectItem = () => setSelectedItem({ name, price, id});

  return (
  <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" "/>
        <Card.Body>
            <Card.Title>Nombre del producto: {name}</Card.Title>
            <Card.Text>
                Precio del producto: $ {price}
            </Card.Text>
            <Button variant="success" onClick={selectItem}>Seleccionar producto</Button>
            <ItemCounter stock={stock} />
        </Card.Body>
        </Card>
  </div>
  );
};

export default Item;