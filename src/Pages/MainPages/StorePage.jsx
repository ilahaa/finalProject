import React from 'react'
import Newsletter from "./Newsletter";
import Products from '../datas/products';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from "react-use-cart";
import addWishList from "../../store/actions/AddWishList";
import { useSelector, useDispatch } from "react-redux";
const StorePage = (product) => {
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  const [data, setData] = useState(Products);
  const filterItems = (categoryItem) => {
    const result = Products.filter((currentData) => {
      return currentData.category === categoryItem;
    });
    setData(result);

  }
  return (
    <div className='storePage'>
      <div className="row">
        <div className="stateComponents mt-5 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
          <ul>
            <li onClick={() => filterItems('toy')}>{t('store.2')}</li> <hr />
            <li onClick={() => filterItems('girl')}>{t('store.3')}</li> <hr />
            <li onClick={() => filterItems('boy')}>{t('store.4')}</li> <hr />
            <li onClick={() => filterItems('shoes')}>{t('store.5')}</li> <hr />
          </ul>
        </div>
        <div className="storeElements col-xl-9 col-lg-9 col-md-9 col-sm-6 col-6">
          <h1>{t('store.1')}</h1>
          <div className="row storeProducts">
            {data.map((product) => {
              const { id, title, price, img } = product;
              return (
                <>
                  <div className="storeElement col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12" key={id}>
                    <div className='item d-flex flex-column mb-4'>
                      <div className="inside-item d-flex justify-content-center flex-column">
                        <div className="storeImg">
                          <img src={img} width={260} height={330} />
                          <div className="addtoCart d-flex align-items-center justify-content-center"
                            onClick={() => addItem(product)}   >{t('cart.3')}</div>
                        </div>
                        <div className="storeWishList" onClick={() => addWishList(product, wishlist, dispatch)}
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
                      <p>{title}</p>
                      <span><i class="fa-solid fa-dollar-sign"></i>
                        {price}</span>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <Newsletter />

    </div>
  )
}

export default StorePage