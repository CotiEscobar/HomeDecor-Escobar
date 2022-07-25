import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import '../styles/cart.css';

const ShoppingCart = () => {

    const {cartItems, clearCart, removeItem, addItemNavBar, getSubtotal, getTotal} = useContext(CartContext);

    return (
        <div>
            {addItemNavBar() === 0 ? (
                <div className='empty-cart-message-container'>
                    <p className='empty-cart-message'>OOPS! TU CARRITO ESTA VACIO. POR FAVOR, AGREGÁ ALGÚN PRODUCTO PARA CONTINUAR.</p>
                    <Link to='/' className='comeback-link'>volver al inicio</Link>
                </div>
        
            ) : (
                <div className='cart-container'>
                    <h2 className='cart-title'>CART</h2>
                    <div className='products-details-container'>

                    {cartItems.map(item => (
                    <div className='product-detail'>
                        <div key={item.id} className='product'>
                            <img className='product-image' src={item.pictureUrl} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.quantity}</p>
                            <p>{item.price}</p>
                            <p>{getSubtotal(item.price, item.quantity)}</p>
                            <span 
                            className='material-symbols-outlined'
                            onClick={() => removeItem(item.id)}>delete
                            </span>
                        </div>
                        <Link to='/checkout'>Comprar</Link>
                        <button onClick={clearCart}>Limpiar carrito</button>
                    </div>
                    ))}
                    </div>
                </div>
            )

            }
        </div>
    )
    }

       
export default ShoppingCart;