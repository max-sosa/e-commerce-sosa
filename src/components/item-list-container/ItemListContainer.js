import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMock } from "../helpers/mock";
import ItemList from "../ItemList";
import Bspinner from "./Spinner";


const ItemListContainer = () => {

  const {id} = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (()=>{
    getMock
      .then(res=>setData(res))
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
  },[])

  const filterProducts = data.filter(({category})=> category === id); 

  return (
    <div >
      {loading ? <Bspinner/> : !id && <ItemList productos={data}/>}
      {id && <ItemList productos={filterProducts}/>}
    </div>
  );
};

export default ItemListContainer;