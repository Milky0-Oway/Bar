import React from "react";
import './Sidebar.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/add' className='sidebar-option'>
                    <span><ion-icon name="add-circle-outline" style={{height: '25px', width: '25px'}}></ion-icon></span>
                    <p>Добавить</p>
                </NavLink>
                <NavLink to='/list' className='sidebar-option'>
                    <span><ion-icon name="list-outline" style={{height: '25px', width: '25px'}}></ion-icon></span>
                    <p>Список</p>
                </NavLink>
                <NavLink to='/orders' className='sidebar-option'>
                    <span><ion-icon name="cart-outline" style={{height: '25px', width: '25px'}}></ion-icon></span>
                    <p>Заказы</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;