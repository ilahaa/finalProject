import React from 'react'

const EighthPageItems = (props) => {
  return (
    <div className="eightImageBox mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
        <img src={props.image} alt="" />
        <i class="fa-brands fa-instagram fa-2x"></i>
    </div>
  )
}

export default EighthPageItems