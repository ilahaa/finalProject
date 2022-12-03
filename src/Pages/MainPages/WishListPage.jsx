import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BestsellerItems from "./BestsellerItems";
import noproduct from "../Images/no_product.png"
const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
 
  return (
    <div className="wishListPage">
      {wishlist.length !==0 ? (
        <div className="shop-products">
          <div className="container">
            <div className="row">
              {wishlist?.map((item, index) => (
                <div className="favorite col-lg-3 p-4"
                  key={index}
                >
                  <BestsellerItems product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <h3 className="mt-5" style={{fontWeight:'bold'}}>Your wishlist is empty</h3> <i className="fa-solid fa-heart"></i>
          <img src={noproduct} width={300} alt="" />
        </div>
      )}
    </div>
  );
};

export default WishListPage;