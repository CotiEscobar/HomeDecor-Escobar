import { useEffect,useState } from 'react';
import '../styles/itemlistcontainer.css';
import ItemCount from './ItemCount';
import ItemList from './Items/ItemList';
import asyncMock from '../utils/asyncmock';
import products from '../utils/products';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        asyncMock(2000, products)
        .then(resultado => setItems(resultado))
        
    },[items]);

    console.log(items)

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