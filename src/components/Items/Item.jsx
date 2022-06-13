import ItemCount from "../ItemCount";

const Item = ({ id, title, description, price, pictureUrl }) => {
    const onAdd = () => {
        console.log('Agregado al carrito');
    } 

    return (
        <div key={id}>
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <ItemCount
                stock={5}
                initial={1}
                onAdd={onAdd}
                />
        </div>
    )
}

export default Item;