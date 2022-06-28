import { Link } from 'react-router-dom';
import '../styles/cartwidget.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const {addItemNavBar} = useContext(CartContext);

    return (
        <Link to='/cart'>
        <span className='material-symbols-outlined'>
            shopping_cart {addItemNavBar}
        </span>
        </Link>
    )
}

export default CartWidget;