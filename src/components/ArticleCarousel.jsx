// import { BlogData } from "../data/blogdata";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../server/firebase";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { ChevronRight } from "react-feather";

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

  const getWeekDate = () => {
    return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  };

  return (
    <div className="m-4 p-4 glass bg-base-800 rounded-xl">
      <h1 className="mb-4 text-base-50 flex items-center gap-4">
        Latest Blogs <ChevronRight />
      </h1>
      <div className="overflow-x-scroll">
        <div className="flex gap-4 min-w-max overflow-x-scroll p-4">
          {blogData
            .sort((a, b) => {
              return b.date?.toDate() - a.date?.toDate();
            })
            .filter((item, index) => {
              return index <= 3;
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
      </div>
    </div>
  );
}

export default ArticleCarousel;
