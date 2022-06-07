import React from 'react'
import './Card.css'

const Card = (props) => {
    const {image, heading, detail} = props;
  return (
    <div className='card'>
        <img src={image} alt=""/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='card-button'>Learn more</button>
    </div>
  )
}

export default Card