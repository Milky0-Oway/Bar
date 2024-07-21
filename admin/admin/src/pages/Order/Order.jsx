import React, {useEffect, useState} from "react";
import './Order.css';
import axios from "axios";
import {toast} from "react-toastify";

const Order = ({url}) => {

    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url+'/api/order/list');
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data);
        }
        else {
            toast.error("Ошибка");
        }
    }

    useEffect(()=>{
        fetchAllOrders();
    },[]);

    return (
        <div className='order add'>
            <h3>Заказы</h3>
            <div className="order-list">
                {orders.map((order,index)=>(
                    <div key={index} className='order-item'>
                        <div>
                            <p className='order-item-food'>
                                {order.items.map((item,index)=>{
                                    if(index===order.items.length-1){
                                        return item.name + ' x ' + item.quantity;
                                    }
                                    else {
                                        return item.name + ' x ' + item.quantity + ', ';
                                    }
                                })}
                            </p>
                            <p className='order-item-name'>{order.address.firstName}</p>
                            <p className='order-item-address'>{order.address.address}</p>
                            <p className='order-item-phone'>{order.address.phone}</p>
                            <p className='order-item-email'>{order.address.email}</p>
                        </div>
                        <p>Количество: {order.items.length}</p>
                        <p>{order.amount} руб.</p>
                        <select>
                            <option value='Food Processing'>В обработке</option>
                            <option value='Accepted'>Принят</option>
                            <option value='Out for delivery'>В пути</option>
                            <option value='Delivered'>Доставлен</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Order;