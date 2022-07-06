import { Link } from 'react-router-dom';
import '../styles/cartwidget.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <Link to='/cart' className='cart-widget-link'>
            <div className='cart-widget-container'>
                <span className='material-symbols-outlined cart'>
                        shopping_cart 
                </span>
                    
                <p className='quantity-num'>({cartItems.length})</p>
            </div>
        </Link>
      
    )
}

export default CartWidget;