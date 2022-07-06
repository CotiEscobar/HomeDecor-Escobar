import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';
import '../styles/cart.css';

const ShoppingCart = () => {

    const {cartItems, clearCart, removeItem, addItemNavBar, getSubtotal, getTotal} = useContext(CartContext);

    return (
        <div>
            {addItemNavBar() === 0 ? (
                <div className="empty-cart-message-container">
                    <p className="empty-cart-message">OOPS! TU CARRITO ESTA VACIO. POR FAVOR, AGREGÁ ALGÚN PRODUCTO PARA CONTINUAR.</p>
                    <Link to='/' className="comeback-link">volver al inicio</Link>
                </div>
        
            ) : (
                <div className="cart-container">
                    <h2 className="cart-title">CART</h2>
                    <div className="products-details-container">
                    {cartItems.map((item) => (
                    <div className="product-detail">
                        <div className="product">
                            <img className="product-image" src={item.pictureUrl} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.quantity}</p>
                            <p>{item.price}</p>
                            <p>{getSubtotal(item.price, item.quantity)}</p>
                            <span 
                            className="material-symbols-outlined"
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


        /*<>
        {cartItems == [] ? <div>
            <h5>Productos en tu carrito</h5>

            {cartItems.map(item => {
                return <div>
                    <hr/>
                    <h1>{item.title}</h1>
                    <h4>{item.description}</h4>
                    <h4>Cantidad: {item.quantity}</h4>
                    <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                    <hr/>
                    </div>
            })}

            <Link to='/checkout'>Comprar</Link>
            <button onClick={clearCart}>Limpiar carrito</button>

        </div>*/
       
export default ShoppingCart;