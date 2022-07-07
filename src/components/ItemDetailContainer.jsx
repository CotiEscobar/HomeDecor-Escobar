import { useState, useEffect} from "react";
//import { asyncMock2 } from "../utils/asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import { getDoc , doc , collection} from 'firebase/firestore';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const collectionProducts = collection(db, "products");
        const referenciaDelDoc = doc(collectionProducts, "Nmu2pXqLpBuw0RmxLREL")
        //console.log(referenciaDelDoc)
        const consulta = getDoc(referenciaDelDoc)
        consulta
            .then(resultado=>{
                //console.log(resultado.id);
                //console.log(resultado.data());
                const producto = resultado.data();
                setItem(producto);
            })
            .catch((error)=>{
                console.log(error);
            })


        /*asyncMock2(parseInt(id))
            .then(resultado => setItem(resultado))
        */
    },[id]);

    return (
        <div>
            <ItemDetail product={item}/>
        </div>
    )
}

export default ItemDetailContainer;