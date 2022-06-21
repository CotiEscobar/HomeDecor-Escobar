import ItemCount from "./ItemCount";

const ItemDetail = ( {product} ) => {
    return (
        <div>
            <img src={product.pictureUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <ItemCount 
            stock={5}
            initial={1}
            />
        </div>
    )
}

export default ItemDetail;