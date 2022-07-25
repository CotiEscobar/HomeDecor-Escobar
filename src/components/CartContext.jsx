import { useState, createContext } from 'react';

export const CartContext = createContext();

const Provider = CartContext.Provider;

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, newQuantity) => {
        const {quantity=0} = cartItems.find(products => products.id === item.id) || {};
        const newCart = cartItems.filter(products => products.id !== item.id);
        setCartItems([...newCart, {...item,quantity: quantity + newQuantity}]);
    }

    console.log('carrito: ', cartItems);

    const isInCart = (id) => {
        return cartItems.find((item) => (item.id === id)) ? true : false
    }

    const clearCart = () => {
        setCartItems([])
    }

    const removeItem = (id) => {
        //if (isInCart(productId)) {
            const a= cartItems.filter(item => item.id !== id) 
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
