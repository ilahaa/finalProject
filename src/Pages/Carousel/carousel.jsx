import React from 'react'
import { useTranslation } from 'react-i18next';
import { useCart } from "react-use-cart";
import addWishList from "../../store/actions/AddWishList";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Carousel = ({ product }) => {
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } =
  useCart();
  return (
    <div className='addToCartItems d-flex flex-column'>
      <div className="item d-flex justify-content-center flex-column">
        <div className="imgCon d-flex justify-content-center align-items-center">
          <img className='carouselImg' width={270} height={340} src={product.img} />
          <div className="addtoCart d-flex align-items-ceznter justify-content-center"
            onClick={() => addItem(product)} >
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
      <p>{product.title}</p>
      <span><i class="fa-solid fa-dollar-sign"></i>{product.price}</span>
    </div>


  )
}

export default Carousel