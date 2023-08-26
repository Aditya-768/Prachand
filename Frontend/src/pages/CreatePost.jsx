import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/CreatePostStyles.css";

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/post/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        console.log('Post created successfully');
        navigate('/getPosts');
        setTitle('');
        setDescription('');
      } else {
        console.error('Error creating post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="inputField"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="textareaField"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="submitButton">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
