import React, {useContext} from "react";
import './CSS/FoodCategory.css'
import {ShopContext} from "../Context/BarContext";
import Item from "../Components/Item/Item";

const FoodCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    return(
        <div className='food-category'>
            {/*<div className='foodcategory-sort'>
                Sort by <img src='' alt=''/>
            </div>*/}
            <div className='foodcategory-products'>
                {all_products.map((item, i)=>{
                    if(props.category === item.category){
                        return <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default FoodCategory;