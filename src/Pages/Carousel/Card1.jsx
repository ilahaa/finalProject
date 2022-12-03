import React from 'react';
import { useTranslation } from 'react-i18next';

function Card1({ item, handleClick }) {
    const { id, img, title, price } = item;
    const { t, i18n } = useTranslation();
    return (
        <div className='d-flex flex-column'>
            <div className="item d-flex justify-content-center flex-column">
                <div className="imgCon">
                    <img className='carouselImg' src={img} width={270} height={340} />
                    <div onClick={() => handleClick(item)} className="selectBtn d-flex align-items-center justify-content-center">{t('cart.3')}</div>
                </div>

            </div>
            <p>{title}</p>
            <span><i class="fa-solid fa-dollar-sign"></i>{price}</span>
        </div>
    );
}

export default Card1