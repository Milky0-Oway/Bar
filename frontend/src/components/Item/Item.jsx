import React, {useContext} from "react";
import './Item.css'
import {Link} from "react-router-dom";
import {ShopContext} from "../../context/BarContext";
const Item=(props)=>{
    const {url}=useContext(ShopContext);
    return(
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <div className='image-container'>
                    <img onClick={window.scrollTo(0,0)} src={url+'/images/'+props.image} alt=""/>
                </div>
            </Link>
            <p>{props.name}</p>
            <p className='item-price'>{props.price} руб.</p>
        </div>
    );
}

export default Item;