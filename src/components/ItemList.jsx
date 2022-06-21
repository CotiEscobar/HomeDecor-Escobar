import Item from './Item';

const ItemList = ( {products} ) => {
    return (
        <section className='item-list-container'> {
        products.map(p =>
        
            <Item 
            key={p.id}
            id={p.id}
            title={p.title}
            pictureUrl={p.pictureUrl}
            description={p.description}
            price={p.price}
            category={p.category}
            />
        )}
        </section>
    )
}

export default ItemList;