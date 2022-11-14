import React from 'react'
import { useTranslation } from 'react-i18next';
import { useCart } from "react-use-cart";
const Carousel = (props) => {
    const { addItem } = useCart();
    const { t, i18n } = useTranslation();

    return (
        <div className='addToCartItems d-flex flex-column'>
            <div className="item d-flex justify-content-center flex-column">
                <div className="imgCon d-flex justify-content-center align-items-center">
                    <img className='carouselImg' width={270} height={340} src={props.img} />
                    <div className="addtoCart d-flex align-items-center justify-content-center"
                        onClick={() => addItem(props.product)} >
                        {t('cart.3')}
                    </div>
                </div>
            </div>
            <p>{props.title}</p>
            <span><i class="fa-solid fa-dollar-sign"></i>{props.price}</span>
        </div>


    )
}

export default Carousel