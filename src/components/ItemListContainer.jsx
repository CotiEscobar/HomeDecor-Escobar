import '../styles/itemlistcontainer.css';

const ItemListContainer = (props) => {
    console.log(props.greeting);
    return (
        <main className="main-container">
            <h3 className="greeting">
                {props.greeting}
            </h3>
        </main>
    )
}

export default ItemListContainer;