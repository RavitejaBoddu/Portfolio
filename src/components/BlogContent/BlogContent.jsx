import React from 'react'
import './BlogContent.css'

const BlogContent = (props) => {
    const {title, description, url} = props;
  return (
    <div className='blog-content'>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noreferrer">jump to the page &#9755; </a>
    </div>
  )
}

export default BlogContent