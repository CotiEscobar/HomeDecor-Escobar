import { useEffect,useState } from 'react';
import '../styles/itemlistcontainer.css';
import ItemList from './ItemList';
import { asyncMock, getProductsByCategory } from '../utils/asyncmock';
import { products } from '../utils/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId) {
            
            getProductsByCategory(categoryId)
            .then(resultado => setItems(resultado))
         
        } else {

            asyncMock(2000, products)
            .then(resultado => setItems(resultado))
        }
        
    },[items]);

    if (items.length > 0) {
        return (
            <main className="main-container">
                <h3 className="greeting">
                    {props.greeting}
                </h3>
                <ItemList products = {items}/>
            </main>
        )
    } else {
        return (
            <main className="main-container">
                <h3 className="greeting">
                    {props.greeting}
                </h3>
               <p>Cargando...</p>
            </main>
        )
    } 
}

export default ItemListContainer;