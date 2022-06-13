import Item from './Item';

const ItemList = ( {products} ) => {
    return products.map(p =>
        <Item 
        key={p.id}
        id={p.id}
        title={p.title}
        pictureUrl={p.pictureUrl}
        description={p.description}
        price={p.price}
        />
        )
}

export default ItemList;