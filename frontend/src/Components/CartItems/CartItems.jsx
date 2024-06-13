import React, {useContext} from "react";
import './CartItems.css'
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/BarContext";

const CartItems=(props)=>{
    const {all_products, cartItems, addToCart, removeFromCart, url} = useContext(ShopContext);

    const totalCount = ()=>{
        let total = 0;
        {all_products.map((e)=> {
            total += e.price*cartItems[e._id];
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
                if(cartItems[e._id]>0){
                    return(
                        <div>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={url+'/images/'+e.image} alt='' className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>{e.price} руб.</p>
                                <div className='cartitems-quantity'>
                                    <span onClick={()=>{removeFromCart(e._id)}}><ion-icon name="remove-outline"></ion-icon></span>
                                    <p>{cartItems[e._id]}</p>
                                    <span onClick={()=>{addToCart(e._id)}}><ion-icon name="add-outline"></ion-icon></span>
                                </div>
                                <p>{e.price*cartItems[e._id]} руб.</p>
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
                <Link to='/order'><button>Оформить заказ</button></Link>
            </div>
        </div>
    );
}

export default CartItems;