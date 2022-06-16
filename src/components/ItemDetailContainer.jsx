import { useState, useEffect} from "react";
import traerProducto from "../utils/traerProducto";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(()=>{
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
        
    },[]);

    console.log(product);

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;