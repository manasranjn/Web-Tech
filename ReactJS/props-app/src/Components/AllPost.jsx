import React from "react";
import Post from "./Post";

const AllPost = ({ comment }) => {
  return (
    <div>
      <h1>All Posts</h1>
      <Post comment={comment} />
    </div>
  );
};

export default AllPost;
