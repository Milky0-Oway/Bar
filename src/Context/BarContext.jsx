import React, {createContext} from "react";
//fetch
import all_products from '../Components/Assets/products';
export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
    const contextValue = {all_products};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;