
import React, { useState } from 'react';
import './App.css';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';

function App() {
  const [postToEdit, setPostToEdit] = useState(null);

  const handleEdit = (post) => {
    setPostToEdit(post);
  };

  const handleSubmit = () => {
    setPostToEdit(null);
  };

  return (
    <div className="App">
      <h1 className="heading">Add Posts</h1>
      <CreatePost postToEdit={postToEdit} onSubmit={handleSubmit} />
      <PostsDisplay onEdit={handleEdit} />
    </div>
  );
}

export default App;
