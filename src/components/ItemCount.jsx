import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumCount = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }
    const redCount = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    }
    return (
        <div className='btn-count-container'>
            <div className='btn-count'>
                <button onClick={redCount} className='btn'>
                    -
                </button>
                <p className='count-text'>{count}</p>
                <button onClick={sumCount} className='btn'>
                    +
                </button>
            </div>
            <div className='btn-addcart-container'>
                <button className='btn-cart'>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;