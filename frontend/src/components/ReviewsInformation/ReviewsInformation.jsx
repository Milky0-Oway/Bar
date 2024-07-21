import React from "react";
import './ReviewsInformation.css';
import Review from "../Review/Review";
import review1 from '../../assets/review1.png';
import review2 from '../../assets/review2.png';
import review3 from '../../assets/review3.png';
import review4 from '../../assets/review4.png';
import review5 from '../../assets/review5.png';
import review6 from '../../assets/review6.png';
import review7 from '../../assets/review7.png';


const ReviewsInformation = () => {
    return(
        <div className='reviews-information'>
            <h1 className='section-name'>Почему мы?</h1>
            <div className='reviews-wrapper'>
                <Review url={review2}/>
                <Review url={review4}/>
                <Review url={review6}/>
                <Review url={review1}/>
                <Review url={review3}/>
                <Review url={review5}/>
            </div>
            <div style={{marginTop: '40px'}}>
                <a className='reviews-button' href='https://yandex.by/maps/-/CDCxFB2b'>Смотреть все отзывы</a>
            </div>
        </div>
    );
}

export default ReviewsInformation;