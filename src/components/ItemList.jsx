import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <section className='item-list-container'> {
        items.map(item =>
        
            <Item 
            key={item.id}
            id={item.id}
            title={item.title}
            pictureUrl={item.pictureUrl}
            price={item.price}
            category={item.category}
            />
        )}
        </section>
    )
}

export default ItemList;