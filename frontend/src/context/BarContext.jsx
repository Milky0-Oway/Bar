import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { url, fetchAllProducts } from '../api';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
    const [allProducts, setAllProducts] = useState([]);
    const [userId, setUserId] = useState(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            return storedUserId;
        } else {
            const newUserId = uuidv4();
            localStorage.setItem('userId', newUserId);
            return newUserId;
        }
    });

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = {...prev, [itemId]: (prev[itemId] || 0) + 1};
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
            return newCartItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = {...prev, [itemId]: (prev[itemId] || 0) - 1};
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
            return newCartItems;
        });
    };

    const getTotalCount = () => {
        let total = 0;
        allProducts.forEach((product) => {
            total += product.price * (cartItems[product._id] || 0);
        });
        return total;
    };

    const getTotalItems = () => {
        let total = 0;
        for (const item in cartItems) {
            total += cartItems[item];
        }
        return total;
    };

    useEffect(() => {
        async function loadData() {
            const products = await fetchAllProducts();
            setAllProducts(products);
        }
        loadData();
    }, []);

    const contextValue = { allProducts, cartItems, addToCart, removeFromCart, getTotalCount, getTotalItems, userId, url };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
