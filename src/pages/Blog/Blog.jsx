import React from "react";
import BlogContent from "../../components/BlogContent/BlogContent";
import Footer from "../../components/footer/Footer";
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="updates">Updates:-</h1>
      <BlogContent
        title="React v18.0"
        description="Many of the features in React 18 are built on top of our new concurrent renderer, a behind-the-scenes change that unlocks powerful new capabilities. Concurrent React is opt-in — it’s only enabled when you use a concurrent feature — but we think it will have a big impact on the way people build applications."
        url="https://reactjs.org/blog/2022/03/29/react-v18.html"
      />
      <BlogContent
        title="How to Upgrade to React 18"
        description="ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it’s running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
        url="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html"
      />

      <Footer />
    </div>
  );
};

export default Blog;
