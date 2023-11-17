import React, { useEffect, useState } from "react";
import Catagories from "../components/Blog/Catagories";
import BlogCard from "../components/Blog/BlogCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../server/firebase";

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const getBlogs = async () => {
    const blogRef = collection(db, "Blogs");
    const data = await getDocs(blogRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBlogData(filteredData);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className=" h-full">
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/1635935/pexels-photo-1635935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">Blogs</h1>
      </div>
      <div className="page-container">
        <h1 className="text-4xl text-base-50">All Blogs</h1>
        <div className="grid md:grid-cols-3 grid-flow-row gap-2 w-full mix-w-max mb-4">
          {blogData
            .sort((a, b) => {
              return b.date?.toDate() - a.date?.toDate();
            })
            .map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  title={item.title}
                  img={item.img}
                  author={item.author}
                  id={item.id}
                />
              );
            })}
        </div>
        <Catagories />
      </div>
    </div>
  );
}

export default Blogs;
