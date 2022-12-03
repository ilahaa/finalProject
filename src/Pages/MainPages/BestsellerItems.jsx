import React from "react";
import { useCart } from "react-use-cart";
import addWishList from "../../store/actions/AddWishList";
import { useSelector, useDispatch } from "react-redux";
const BestsellerItems = ({ product }) => {
  const { addItem } = useCart();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="storeElement col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
      <div className="item d-flex flex-column mb-4">
        <div className=" d-flex justify-content-center flex-column">
          <div className="storeImg">
            <img src={product.img} width={260} height={330} alt="" />
            <div
              className="addtoCart d-flex align-items-center justify-content-center"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </div>
          </div>
        </div>
        <p>{product.title}</p>
        <span>
          <i class="fa-solid fa-dollar-sign"></i>
          {product.price}{" "}
          {/****************/}
          <div
            className="wishList"
            onClick={() => addWishList(product, wishlist, dispatch)}
          >
            {wishlist.find(
              (selectedProduct) => selectedProduct.id === product.id
            ) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          {/* ***************************** */}
        </span>
      </div>
    </div>
  );
};

export default BestsellerItems;
