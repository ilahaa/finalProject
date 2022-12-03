import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from "react-use-cart";
import addWishList from "../../store/actions/AddWishList";
import { useSelector, useDispatch } from "react-redux";
const SingleCarousel = (product) => {
    const { addItem } = useCart();
    const { t, i18n } = useTranslation();
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    return (
        <div className='addToCartItems d-flex flex-column'>
            <div className="item" style={{ "margin-left": "35px" }}>
                <div className="imgCon">
                    <img className='carouselImg' width={270} height={340} src={product.img} />
                    <div onClick={() => addItem(product)} style={{ "margin-left": "35px" }}
                        className="addtoCart d-flex align-items-center justify-content-center">
                        {t('cart.3')}
                    </div>
                    <div className="wishList" onClick={() => addWishList(product, wishlist, dispatch)}
                    >
                        {wishlist.find(
                            (selectedProduct) => selectedProduct.id === product.id
                        ) ? (
                            <i className="fa-solid fa-heart"></i>
                        ) : (
                            <i className="fa-regular fa-heart"></i>
                        )}
                    </div>
                </div>
            </div>
            <p className="ms-5">{product.title}</p>
            <span className='ms-5'><i class="fa-solid fa-dollar-sign"></i>{product.price}</span>
        </div>
    )
}
export default SingleCarousel;