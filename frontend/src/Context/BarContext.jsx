import React, {createContext, useEffect, useState} from "react";
import axios, {all} from "axios";
//import all_products from '../Assets/products';
export const ShopContext = createContext(null);

/*const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}*/

const ShopContextProvider = (props)=>{
    //const [cartItems, setCartItems] = useState(getDefaultCart());
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token,setToken] = useState('');
    const [all_products, setAllProducts] = useState([]);

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        if(token) {
            await axios.post(url+'/api/cart/add',{itemId},{headers:{token}});
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
        if(token) {
            await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}});
        }
    }

    const getTotalCount = ()=>{
        let total = 0;
        all_products.map((e, index)=> {
            total += e.price*cartItems[index];
        })
        return total;
    }

    const getTotalItems = () => {
        let total = 0;
        for(const item in cartItems){
            total += cartItems[item];
        }
        return total;
    }

    const fetchAllProducts = async () => {
        const response = await axios.get(url+'/api/food/list');
        setAllProducts(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+'/api/cart/get',{},{headers: {token}});
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchAllProducts();
            if(localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem('token'));
            }
        }
        loadData();
    },[]);

    /*useEffect(() => {
        if(all_products.length !== 0) {
            let cart = {};
            for (let index = 0; index < all_products.length; index++) {
                cart[all_products[index]._id] = 0;
            }
            setCartItems(cart);
        }
    },[all_products]);*/

    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCount, getTotalItems,url,setToken,token};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;