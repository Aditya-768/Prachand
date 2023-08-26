import React, { useState, useEffect } from 'react';
import "../styles/PostStyles.css";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/post/get-posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Error fetching posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <div className="posts-container">
        <h2>All Posts</h2>
        <ul className="posts-list">
          {posts.map((post) => (
            <li key={post._id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostsPage;
