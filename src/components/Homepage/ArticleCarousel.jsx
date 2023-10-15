// import { BlogData } from "../data/blogdata";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../server/firebase";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
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

  return (
    <div className=" p-4 glass bg-base-800 rounded-xl">
      <h1 className="mb-4 text-base-50 flex items-center gap-4">
        Latest Blogs <ChevronRight />
      </h1>
      <div className="overflow-x-scroll">
        <div className="flex gap-4 min-w-max overflow-x-scroll p-4">
          {blogData
            .sort((a, b) => {
              return b.date?.toDate() - a.date?.toDate();
            })
            .filter((_, index) => {
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
