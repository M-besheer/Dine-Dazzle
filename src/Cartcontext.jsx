import React, { createContext, useState, useContext } from "react";

// Create context
const CartCountContext = createContext();

// Custom hook to access cart count
export const useCartCount = () => useContext(CartCountContext);

// Cart count provider component
// Cart count provider component
export const CartCountProvider = ({ children }) => {
    const [cartcount, setCartcount] = useState(0);

    const cartadd = () => {
        setCartcount(prevCount => prevCount + 1);
    };

    const cartremove = () => {
        setCartcount(prevCount => prevCount - 1 >= 0 ? prevCount - 1 : 0);
    };

    const resetCartCount = () => {
        setCartcount(0);
    };

    return (
        <CartCountContext.Provider value={{ cartcount, cartadd, cartremove, resetCartCount }}>
            {children}
        </CartCountContext.Provider>
    );
};
