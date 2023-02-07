import React from 'react'
import "./childCategory.css";
import { useNavigate } from "react-router";

export const ChildCategory = (props) => {
  const navigate=useNavigate();

  return (
    <div className='element_dziecko'>
    <div className='child'>
        {props.name}
        
    </div>
    <button className='przycisk'
            onClick={() => {
              navigate(`/category/${props.childID}`)
            }}>Wejdź
    </button>
    </div>
  )
}

export default ChildCategory;