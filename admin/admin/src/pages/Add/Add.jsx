import React, {useState} from "react";
import './Add.css';
import axios from "axios";
import {toast} from "react-toastify";

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data,setData] = useState({
       name:"",
       description:"",
       price:"",
       category:"rolls"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"rolls"
            });
            setImage(false);
            toast.success(response.data.message);
        }
        else {
            toast.error(response.data.message);
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Загрузить изображение</p>
                    <label htmlFor='image'>
                        {image
                            ? <img src={URL.createObjectURL(image)} alt="" style={{height:'100px'}}/>
                            : <ion-icon name="image-outline" style={{height: '100px', width: '100px'}}></ion-icon>}
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Название</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name'/>
                </div>
                <div className='add-product-description flex-col'>
                    <p>Описание</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6'></textarea>
                </div>
                <div className='add-product-category flex-col'>
                    <p>Категория</p>
                    <select onChange={onChangeHandler} name='category'>
                        <option value="rolls">Роллы</option>
                        <option value="pizza">Пицца</option>
                        <option value="burgers">Бургеры</option>
                        <option value="snacks">Горячие закуски</option>
                        <option value="soups">Супы</option>
                        <option value="salads">Салаты</option>
                        <option value="drinks">Напитки</option>
                    </select>
                </div>
                <div className='add-product-price flex-col'>
                    <p>Цена</p>
                    <input onChange={onChangeHandler} value={data.price} type='number' name='price'/>
                </div>
                <button type='submit' className='add-button'>Добавить</button>
            </form>
        </div>
    );
}

export default Add;