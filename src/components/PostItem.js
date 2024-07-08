import React from 'react';

const PostItem = ({ post, onEdit }) => {
  return (
    <div className="post-item">
      <h2 className="post-Color">{post.title}</h2>
      <p className="post-Color">{post.content}</p>
      <button className="button" onClick={() => onEdit(post)}>Edit</button>
    </div>
  );
};

export default PostItem;
