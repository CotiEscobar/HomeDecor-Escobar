import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {

    const {cartItems, clearCart, removeItem} = useContext(CartContext);

    return (
        <div>
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

        </div>
    )
}
export default ShoppingCart;