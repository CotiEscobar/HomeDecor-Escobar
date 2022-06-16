
const ItemDetail = ( {product} ) => {
    return (
        <div>
            <img src={product.pictureUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ItemDetail;