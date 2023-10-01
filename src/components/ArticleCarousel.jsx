// import { BlogData } from "../data/blogdata";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../server/firebase";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function ArticleCarousel() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const blogRef = collection(db, "Blogs");
      const data = await getDocs(blogRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogData(filteredData);
    };
    getBlogs();
  }, []);

  console.log(blogData);
  return (
    <div className="m-4">
      <h1 className="mb-4">Latest Blog</h1>
      <div className="overflow-x-scroll">
        <div className="flex gap-4 min-w-max overflow-x-scroll p-4">
          {blogData.map((item, index) => {
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
      </div>
    </div>
  );
}

export default ArticleCarousel;
