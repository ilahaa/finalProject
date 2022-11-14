import React from 'react'

const SeventhPageBoxes = (props) => {
  return (
    <>
     <i className={props.icon}></i>
     <h3>{props.title}</h3>
     <p className='w-100'>{props.text}</p>
     </> 
  )
}

export default SeventhPageBoxes