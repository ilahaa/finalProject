import React from "react";
import { useCart } from "react-use-cart";
const BestsellerItems = (props) => {
  const { addItem } = useCart();

  return (
    <div className="storeElement col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
      <div className="item d-flex flex-column mb-4">
        <div className=" d-flex justify-content-center flex-column">
          <div className="storeImg">
            <img src={props.img} width={260} height={330} alt="" />
            <div
              className="addtoCart d-flex align-items-center justify-content-center"
              onClick={() => addItem(props.product)} >
              Add to Cart
            </div>
          </div>
        </div>
        <p>{props.title}</p>
        <span>
          <i class="fa-solid fa-dollar-sign"></i>
          {props.price}
        </span>
      </div>
    </div>
  );
};

export default BestsellerItems;
