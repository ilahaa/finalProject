import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from "react-use-cart";
const SingleCarousel = (props) => {
    const { addItem } = useCart();
    const { t, i18n } = useTranslation();

    return (
        <div className='addToCartItems d-flex flex-column'>
            <div className="item" style={{ "margin-left": "35px" }}>
                <div className="imgCon">
                    <img className='carouselImg' width={270} height={340} src={props.img} />
                    <div onClick={() => addItem(props.product)} style={{ "margin-left": "35px" }}
                        className="addtoCart d-flex align-items-center justify-content-center">
                        {t('cart.3')}
                    </div>
                </div>
            </div>
            <p className="ms-5">{props.title}</p>
            <span className='ms-5'><i class="fa-solid fa-dollar-sign"></i>{props.price}</span>
        </div>
    )
}
export default SingleCarousel;