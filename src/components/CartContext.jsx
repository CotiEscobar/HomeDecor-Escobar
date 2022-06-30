import { useState, createContext } from 'react';

export const CartContext = createContext();

const Provider = CartContext.Provider;

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

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

    const addItemNavBar = () => {
        let quantity = 0
        cartItems.forEach((product) => {
            quantity = quantity + product.quantity
    })
        return quantity
    }

    const getSubtotal = (price, quantity) => {
        let subtotal = 0
        subtotal = subtotal + (price * quantity)
        return Number(subtotal)
    }

    const getTotal = () => {
        let total = 0
        cartItems.forEach((item) => {
            total = total + (item.quantity * item.price)
        })
        return Number(total)
    }

    
    return (
        <Provider value={{cartItems, addItem, isInCart, clearCart, removeItem, addItemNavBar, getSubtotal, getTotal}}>
            {children}
        </Provider>
    )
}
