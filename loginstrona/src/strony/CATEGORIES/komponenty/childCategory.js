import React from 'react'
import "./childCategory.css";

export const ChildCategory = (props) => {
  return (
    <div className='child'>
        {props.name}
    </div>
  )
}

export default ChildCategory;