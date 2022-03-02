import { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promises";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  return {
    products,
  };
};


export default useProducts;