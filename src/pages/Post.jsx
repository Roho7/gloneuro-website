import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Post() {
  return (
    <div className="h-screen p-4 text-base-50">
      <h1>Post Something</h1>
      <div className="flex flex-col">
        <a href="/post/blogs">Add Blog</a>
        <a href="/post/news">Add News</a>
        <a href="/post/education">Add Education</a>
        <a href="/post/research">Add Research</a>
      </div>
    </div>
  );
}

export default Post;
