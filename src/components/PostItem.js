import React from 'react';
import { useDispatch } from 'react-redux';

const PostItem = ({ post, onEdit }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
    </div>
  );
};

export default PostItem;
