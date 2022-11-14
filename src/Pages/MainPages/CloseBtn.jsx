import React from 'react'
import { useState } from 'react';
import RenderCart from "../MainPages/RenderCart"
const CloseBtn = () => {
    const[close,setClose]=useState(false);


  return (
    <div>
    {
        close? <RenderCart /> :null
      }
    <i onClick={()=>setClose(!close)} className="x-icon fa-sharp fa-solid fa-xmark fa-2x"></i></div>
  )
}

export default CloseBtn