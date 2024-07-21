import React, {useContext, useState} from "react";
import './FoodCategory.css'
import {ShopContext} from "../../context/BarContext";
import Item from "../../components/Item/Item";
import MenuCategories from "../../components/MenuCategories/MenuCategories";

const FoodCategory = (props) => {

    const {allProducts} = useContext(ShopContext);
    const [parameter, setParameter] = useState('default');

    const onChangeHandler = (event) => {
        setParameter(event.target.value);
    }

    const displayItems = () => {
        let filteredItems = allProducts.filter(item => props.category === item.category);

        if (parameter === 'decreasing') {
            filteredItems.sort((a, b) => b.price - a.price);
        } else if (parameter === 'increasing') {
            filteredItems.sort((a, b) => a.price - b.price);
        }

        return(
            <div className='foodcategory-products'>
                {filteredItems.map((item, i) => (
                    <Item key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))}
            </div>
        )
    }

    return(
        <div className='food-category'>
            <MenuCategories/>
            <div className='foodcategory-header'>
                <h1>{props.name}</h1>
                <div className='foodcategory-sort'>
                    <h3>Сортировать по</h3>
                    <select onChange={onChangeHandler} name='category'>
                        <option value="default">Умолчанию</option>
                        <option value="decreasing">Убыванию цены</option>
                        <option value="increasing">Возрастанию цены</option>
                    </select>
                </div>
            </div>
            {displayItems()}
        </div>
    );
}

export default FoodCategory;