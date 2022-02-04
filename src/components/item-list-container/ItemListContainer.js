import { useState, useEffect } from "react";
import { getMock } from "../helpers/mock";
import ItemList from "../ItemList";
import Bspinner from "./Spinner";


const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (()=>{
    getMock
      .then(res=>setData(res))
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
  },[])

  console.log(data);
  

  return (
    <div >
      {loading ? <Bspinner/> : <ItemList productos={data}/>}
    </div>
  );
};

export default ItemListContainer;