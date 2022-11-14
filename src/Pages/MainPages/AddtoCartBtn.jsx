import React from 'react'
import {useCart} from "react-use-cart"

const AddtoCartBtn = (props) => {
  const {addItem}=useCart();
  return (
    <div onClick={()=>addItem(props.item)} className="selectBtn d-flex align-items-center justify-content-center">Add to Cart</div>
  )
}

export default AddtoCartBtn