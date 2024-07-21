import React, {useContext} from "react";
import {ShopContext} from "../context/BarContext";
import {useParams} from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
    const {allProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allProducts.filter((e)=>e._id == productId);
    return(
        <div>
            <ProductDisplay product={product}/>
        </div>
    );
}

export default Product;