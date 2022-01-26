import { Card, Button } from "react-bootstrap";

const Item = ({ name, price, id, setSelectedItem, image }) => {
  const selectItem = () => setSelectedItem({ name, price, id});

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" "/>
        <Card.Body>
            <Card.Title>Nombre del producto: {name}</Card.Title>
            <Card.Text>
                Precio del producto: $ {price}
            </Card.Text>
            <Button variant="success" onClick={selectItem}>Seleccionar producto</Button>
        </Card.Body>
        </Card>
    </>
    
  );
};

export default Item;