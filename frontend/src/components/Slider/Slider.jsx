import React, { useEffect, useRef, useState } from "react";
import './Slider.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Slider = () => {
    const listRef = useRef(null);
    const dotsRef = useRef(null);

    const [active, setActive] = useState(0);
    const [items, setItems] = useState([]);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const items = listRef.current.querySelectorAll('.image');
        const dots = dotsRef.current.querySelectorAll('li');
        setItems(items);
        setDots(dots);

        dots.forEach((li, key) => {
            li.addEventListener('click', () => {
                setActive(key);
                reloadSlider(key);
            });
        });
    }, []);

    useEffect(() => {
        const refreshSlider = setInterval(() => {
            nextAction();
        }, 3000);

        return () => clearInterval(refreshSlider);
    }, [active, items]);

    const prevAction = () => {
        if (!items.length) return;
        let newActive = active - 1;
        if (newActive < 0) {
            newActive = items.length - 1;
        }
        setActive(newActive);
        reloadSlider(newActive);
    };

    const nextAction = () => {
        if (!items.length) return;
        let newActive = active + 1;
        if (newActive >= items.length) {
            newActive = 0;
        }
        setActive(newActive);
        reloadSlider(newActive);
    };

    const reloadSlider = (newActive) => {
        if (items.length === 0) return;

        const checkLeft = items[newActive].offsetLeft;
        listRef.current.style.transform = `translateX(-${checkLeft}px)`;

        let lastActiveDot = dotsRef.current.querySelector('.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        }
        dots[newActive].classList.add('active');
    };

    function handleDotClick(index){
        setActive(index);
        reloadSlider(index);
    }

    return (
        <div className='slider'>
            <div className='list' ref={listRef}>
                <div className='image'>
                    <img src={img1} alt='' />
                </div>
                <div className='image'>
                    <img src={img2} alt='' />
                </div>
                <div className='image'>
                    <img src={img3} alt='' />
                </div>
            </div>
            <div className='buttons'>
                <button id='prev' onClick={prevAction}>
                    <ion-icon name="arrow-back-outline" style={{background: 'none', height: '30px', width: '30px'}}></ion-icon>
                </button>
                <button id='next' onClick={nextAction}>
                    <ion-icon name="arrow-forward-outline" style={{background: 'none', height: '30px', width: '30px'}}></ion-icon>
                </button>
            </div>
            <ul className='dots' ref={dotsRef}>
                <li className='active' onClick={() => handleDotClick(0)}></li>
                <li onClick={() => handleDotClick(1)}></li>
                <li onClick={() => handleDotClick(2)}></li>
            </ul>
        </div>
    );
}

export default Slider;