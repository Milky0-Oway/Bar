import React from "react";
import './AboutInformation.css';

const AboutInformation = () => {
    return(
        <div className='about-information'>
            <h1 className='section-name'>О нас</h1>
            <div className='about-wrapper'>
                <h2 className='text-left'>МЕСТО<br/>ВСТРЕЧ<br/>ДРУЗЕЙ<br/>И ИХ<br/>ДРУЗЕЙ</h2>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1037ca85e294a95b0a8f4cc2f89f9c620f0e83e1a2b6673382dd3de46932a23&amp;source=constructor"
                    width="500" height="400" frameBorder="0"></iframe>
                <div className='text-right-wrapper'>
                    <h2 className='text-right'>МЫ ВЫРОСЛИ НА РАЙОНЕ,<br/>И ВСЕГДА МЕЧТАЛИ О МЕСТЕ,<br/>ГДЕ МОЖНО ВСТРЕТИТЬСЯ И<br/>ОТДОХНУТЬ ДУШОЙ,<br/>ПОСЛУШАТЬ ЛЮБИМУЮ МУЗЫКУ<br/>И ОКУНУТЬСЯ В АТМОСФЕРУ<br/>РОК-Н-РОЛЛА... И МЫ НАШЛИ<br/>ЭТО МЕСТО</h2>
                </div>
            </div>
        </div>
    );
}

export default AboutInformation;