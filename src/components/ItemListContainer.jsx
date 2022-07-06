import { useEffect,useState } from 'react';
import '../styles/itemlistcontainer.css';
import ItemList from './ItemList';
import { asyncMock, getProductsByCategory } from '../utils/asyncmock';
import { products } from '../utils/products';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import { getDocs , collection } from 'firebase/firestore';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    


    useEffect(() => {

        const collectionProducts = (collection(db, "products"));

        const consulta = getDocs(collectionProducts);

        consulta
            .then((resultado)=>{
                const products_map = resultado.docs.map(referencia => {
                    //console.log(referencia.id)
                    //console.log(referencia.data());
                    const aux = referencia.data();
                    aux.id = referencia.id;
                    //console.log(aux)
                    return aux;
                })        
                
                setItems(products_map);

            })
            .catch((error)=>{
                console.log(error);
            })

        /*if(categoryId) {
            
            getProductsByCategory(categoryId)
            .then(resultado => setItems(resultado))
         
        } else {

            asyncMock(500, products)
            .then(resultado => setItems(resultado))
        }*/
        
    },[]);

    if (items.length > 0) {
        return (
            <main className="main-container">
                <ItemList items={items}/>
            </main>
        )
        }
    /*
    } else {
        return (
            <main className="main-container">
                <h3 className="greeting">
                    {props.greeting}
                </h3>
               <p>Cargando...</p>
            </main>
        )
    } */
}

export default ItemListContainer;