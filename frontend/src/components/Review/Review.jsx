import React from "react";
import './Review.css';

const Review = (props) => {
    const url = props.url;
    return(
        <div>
            <img className='review' src={url} alt=''/>
        </div>
    );
}

export default Review;