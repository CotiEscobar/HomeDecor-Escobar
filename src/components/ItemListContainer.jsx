import { useEffect,useState } from 'react';
import '../styles/itemlistcontainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import { getDocs , collection , query , where } from 'firebase/firestore';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const { categoryId } = useParams();


    useEffect(() => {
        const collectionProducts = (collection(db, 'products'));
        

        const ref = categoryId
        ? query (collectionProducts, where('categoryId', '==', categoryId))
        : collectionProducts


        const consulta = getDocs(ref);

        consulta
            .then((resultado)=>{
                const products_map = resultado.docs.map(referencia => {
                    //console.log(referencia.id)
                    ///console.log(referencia.data());
                    //console.log(resultado.docs);
                    const aux = referencia.data();
                    aux.id = referencia.id;
                    //console.log(aux.id)
                    return aux;
                })        
                
                setItems(products_map);

            })
            .catch((error)=>{
                console.log(error);
            })
        
    },[categoryId]);

    if (items.length > 0) {
        return (
            <main className="main-container">
                <ItemList items={items}/>
            </main>
        )
    } else {
        return (
            <main className="main-container">
               <p>Cargando...</p>
            </main>
        )
    } 
}

export default ItemListContainer;