import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = (props) => {
    const {image, txt1, txt2} = props;
  return (
    <div className='floating-div'>
        <img className='floating-div-img' src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv