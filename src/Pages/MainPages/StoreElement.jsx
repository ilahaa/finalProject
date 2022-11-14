import React from 'react'
import { useCart } from "react-use-cart";
const StoreElement = (props) => {
  const { addItem } = useCart();
  return (
    <div className="storeElement col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12">
      <div className='item d-flex flex-column mb-4'>
        <div className=" d-flex justify-content-center flex-column">
          <div className="storeImg">
            <img  src={props.img} width={260} height={330} />
            <div onClick={() => addItem(props.product)} className="addtoCart d-flex align-items-center justify-content-center">Add to Cart</div>
          </div>

        </div>
        <p>{props.title}</p>
        <span><i class="fa-solid fa-dollar-sign"></i>{props.price}</span>
      </div>
    </div>
  )
}

export default StoreElement;