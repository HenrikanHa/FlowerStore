import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Blog.css';
import posts from '../constants/posts'; 

const Blog = () => {
  return (
    <Layout>
      <main className="blog-page">
        <div className="container">
          <h1>Blog</h1>
          <p>Welcome to our blog! Here we share our passion for flowers, offer care tips, and explore the latest trends in floral design.</p>

          <div className="blog-posts">
            {posts.map(post => (
              <article className="blog-post">
                <h2><Link to="/blog">{post.title}</Link></h2>
                <p className="post-date">Posted on {post.date}</p>
                <p>{post.content}</p>
                <Link to="/blog" className="read-more">Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;