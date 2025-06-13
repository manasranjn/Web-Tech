import React from "react";
import Comment from "./Comment";

const Post = ({ comment }) => {
  return (
    <div>
      <h1>Post</h1>
      <Comment comment={comment} />
    </div>
  );
};

export default Post;
