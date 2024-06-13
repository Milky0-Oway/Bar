import React, {useContext} from "react";
import {ShopContext} from "../../Context/BarContext";
import {Link} from "react-router-dom";
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {all_products, cartItems} = useContext(ShopContext);

    const totalCount = ()=>{
        let total = 0;
        {all_products.map((e)=> {
            total += e.price*cartItems[e._id];
        })}
        return total;
    }

    return(
        <form className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Информация о доставке</p>
                <input type='text' placeholder='Имя'/>
                <input type='text' placeholder='Фамилия'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Адрес'/>
                <input type='text' placeholder='Номер телефона'/>
            </div>
            <div className='place-order-right'>
                <div className='cartitems-total'>
                    <h1>Итого: {totalCount()} руб.</h1>
                </div>
                <Link to='/'><button>Перейти к оплате</button></Link>
            </div>
        </form>
    );
}

export default PlaceOrder;