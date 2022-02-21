import React from "react";
import Item from "./Item";

 const ItemList = ({productos}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center" style={{display:'flex', margin:'1rem'}}>
             {
                 productos?.map((prod)=> <Item key={prod.id} prod={prod}/>)
             }
        </div>
    )
}

export default ItemList;