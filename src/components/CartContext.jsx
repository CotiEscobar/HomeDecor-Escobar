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
    } else {
        const itemToAdd = {...product, quantity}
        setCartItems([...cartItems, itemToAdd])
    }
}

// Verifica si el producto ya fue agrgado al carrito
    const isInCart = (id) => {
        return cartItems.some((item) => (item.id === id))
    }

 // Agrega cantidad al icono del carrito en NavBar
 const addItemNavBar = () => {
    let quantity = 0
    cartItems.forEach((product) => {
        quantity = quantity + product.quantity
})
    return quantity
}

    return (
        <Provider value={{cartItems, addItem, isInCart, addItemNavBar}}>
            {children}
        </Provider>
    )
}
