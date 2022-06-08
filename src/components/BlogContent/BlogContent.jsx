import React from 'react'
import './BlogContent.css'

const BlogContent = (props) => {
    const { title, date, author, description, url, color} = props;
  return (
    <div className='blog-content'>
      <div className='blog-content-header' style={{background: `${color}`}}>
      <h1>{title}</h1>
        <p>{date}</p>
        <span>{author}</span>
      </div>
      <div className='blog-content-container'>
      <p>{description}</p>
        <a href={url} target="_blank" rel="noreferrer">jump to the page &#9755; </a>
      </div>
    </div>
  )
}

export default BlogContent