import { useState, useEffect} from "react";
import { asyncMock2 } from "../utils/asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});

    const {id} = useParams()

    useEffect(()=>{
        asyncMock2(parseInt(id))
            .then(resultado => setItem(resultado))

    },[item]);

    return (
        <div>
            <ItemDetail product={item}/>
        </div>
    )
}

export default ItemDetailContainer;