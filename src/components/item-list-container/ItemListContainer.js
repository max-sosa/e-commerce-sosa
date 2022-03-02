import { useParams } from "react-router-dom";
import Item from "../Item";
import useProducts from "../../hooks/useProducts";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center" style={{display:'flex', margin:'1rem'}}>
      {!id && products.map((products) => {
          return <Item key={products.id} {...products} />;
        })}
      {id && filterProducts.map((products) => {
          return <Item key={products.id} {...products} />;
        })}
    </div>
  );
};

export default ItemListContainer;