import React from 'react'
const BlogBoxes = (props) => {
  return (
    <div className="blogBoxes d-flex flex-column col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
      <div className="con">
        <img width={400} src={props.picture} alt="" /></div>
      <h3  className='mt-3'>{props.text}</h3>
    </div>

  )
}

export default BlogBoxes