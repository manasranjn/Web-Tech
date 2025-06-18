import React, { useState, useEffect } from "react";
import Post from "./Post";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allData = await response.json();
    console.log(allData);
    setPosts(allData);
  };
  //   getAllPost();
  useEffect(() => {
    console.log("useEffect called");
    getAllPost();
  }, []);

  //   console.log("Post data", posts);

  return (
    <div className="all-post">
      {/* {posts.map((post, index) => (
        <div className="post" key={index}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))} */}
      {posts.map((post) => (
        <Post title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
};

export default AllPost;
