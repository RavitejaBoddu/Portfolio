import React, { useState } from "react";
import BlogContent from "../../components/BlogContent/BlogContent";
import Footer from "../../components/footer/Footer";
import "./Blog.css";
// import axios from "axios";
import blogData from'./blogData'


const Blog = () => {

  const [updates, setUpdates]= useState(blogData.data)

  return (
    <div className="blog">
      <h1 className="updates bounce-in-right">Updates:-</h1>
      <div className="blog-container">
        <div className="blog-left-container">
          <ul>
            {/* <h3></h3> */}
            {
            updates.map((item) => {
              return (
                <li key={item.id}>{item.title}</li>
              )}
            )
            }
          </ul>
        </div>
        <div className="blog-right-container">
        {
            updates.map((item) => {
              return (
                <BlogContent {...item} key={item.id}/>
              )}
            )
            }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
