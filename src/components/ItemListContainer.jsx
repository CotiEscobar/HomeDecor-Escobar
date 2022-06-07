import '../styles/itemlistcontainer.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    console.log(props.greeting);
    return (
        <main className="main-container">
            <h3 className="greeting">
                {props.greeting}
            </h3>
            <ItemCount
            stock={5}
            initial={1}
            />
        </main>
    )
}

export default ItemListContainer;