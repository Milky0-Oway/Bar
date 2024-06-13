import React, {useContext} from "react";
import {ShopContext} from "../Context/BarContext";
import {useParams} from "react-router-dom";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder";

const Order = () => {
    return(
        <div>
            <PlaceOrder/>
        </div>
    );
}

export default Order;