import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

const Provider = CartContext.Provider;

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    //Agregar un producto al carrito
    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            let copia = cartItems.findIndex((copia) => (copia.id === product.id))
            let nuevoProducto = [...cartItems]
            nuevoProducto[copia].quantity += quantity
            setCartItems(nuevoProducto)
            console.log(cartItems)
        } else {
            const itemToAdd = {...product, quantity}
            setCartItems([...cartItems, itemToAdd])
            console.log(cartItems)
        }
    }

    // Verifica si el producto ya fue agrgado al carrito
    const isInCart = (id) => {
        return cartItems.some((item) => (item.id === id))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const removeItem = (productId) => {
        //if (isInCart(productId)) {
            const a= cartItems.filter(item => item.id !== productId) 
            setCartItems(a)
        //}
    }

    return (
        <Provider value={{cartItems, addItem, isInCart, clearCart, removeItem}}>
            {children}
        </Provider>
    )
}
