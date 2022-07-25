import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import { getDoc , doc , collection} from 'firebase/firestore';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const collectionProducts = collection(db, 'products');
        const referenciaDelDoc = doc(collectionProducts,id);
        const consulta = getDoc(referenciaDelDoc);

        consulta
            .then((response)=>{
              const result = (response.data());
              setItem(result)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[id]);

    return (
        <div>
            <ItemDetail product={item}/>
        </div>
    )
}

export default ItemDetailContainer;