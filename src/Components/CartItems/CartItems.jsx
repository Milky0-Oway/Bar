import React, {useContext} from "react";
import './CartItems.css'
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/BarContext";
import all_products from "../Assets/products";

const CartItems=(props)=>{
    const {all_products, cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    const totalCount = ()=>{
        let total = 0;
        {all_products.map((e)=> {
            total += e.price*cartItems[e.id];
        })}
        return total;
    }

    return(
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Блюдо</p>
                <p>Название</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Общая сумма</p>
            </div>
            <hr/>
            {all_products.map((e)=>{
                if(cartItems[e.id]>0){
                    return(
                        <div>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>{e.price} руб.</p>
                                <div className='cartitems-quantity'>
                                    <span onClick={()=>{removeFromCart(e.id)}}><ion-icon name="remove-outline"></ion-icon></span>
                                    <p>{cartItems[e.id]}</p>
                                    <span onClick={()=>{addToCart(e.id)}}><ion-icon name="add-outline"></ion-icon></span>
                                </div>
                                <p>{e.price*cartItems[e.id]} руб.</p>
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Итого: {totalCount()} руб.</h1>
                </div>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
}

export default CartItems;