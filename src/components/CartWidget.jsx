import { Link } from 'react-router-dom';
import '../styles/cartwidget.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <Link to='/cart'>
        <h1>{cartItems.length}</h1>
        <span className='material-symbols-outlined'>
            shopping_cart 
        </span>
        </Link>
    )
}

export default CartWidget;