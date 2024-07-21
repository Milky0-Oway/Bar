import React, {useContext, useState} from "react";
import {ShopContext} from "../../context/BarContext";
import './PlaceOrder.css';
import axios from "axios";

const PlaceOrder = () => {
    const {allProducts, cartItems,token,url} = useContext(ShopContext);

    const [data,setData]=useState({
        firstName:"",
        email:"",
        address:"",
        phone:""
    });

    const onChangeHandler=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    };

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        allProducts.map((item) => {
            if (cartItems[item._id] > 0) {
               let itemInfo = item;
               itemInfo["quantity"] = cartItems[item._id];
               orderItems.push(itemInfo);
            }
        });
        let orderData = {
          address:data,
          items:orderItems,
          amount:totalCount()+2,
        };
        let response = await axios.post(url+'/api/order/place',orderData);
        if (response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url);
        }
        else {
            alert('Ошибка');
            console.log(response);
        }
    };

    const totalCount = ()=>{
        let total = 0;
        {allProducts.map((e)=> {
            if (cartItems[e._id] !== undefined) {
                total += e.price*cartItems[e._id];
            }
        })}
        return total;
    };

    // id="input_1496239478607" data-phonemask-iso="ru" data-phonemask-code="+7" data-phonemask-mask="+7(999) 999-99-99" maxlength="15" data-phonemask-without-code="(999) 999-99-99"

    return(
        <form onSubmit={placeOrder} className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Информация о доставке</p>
                <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='Имя'/>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type='tel' placeholder='Номер телефона'/>
                <input required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email'/>
                <input required name='address' onChange={onChangeHandler} value={data.address} type='text' placeholder='Адрес'/>
            </div>
            <div className='place-order-right'>
                <div className='cartitems-total'>
                    <h1>Итого: {totalCount()} руб.</h1>
                </div>
                <button type='submit'>Перейти к оплате</button>
            </div>
        </form>
    );
}

export default PlaceOrder;