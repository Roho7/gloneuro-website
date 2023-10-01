// import { BlogData } from "../data/blogdata";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "../server/firebase";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchCatagory } from "../config/atoms";
import BlogCard from "./BlogCard";

function SearchBlogs() {
  const [blogData, setBlogData] = useState([]);
  const searchedCatagory = useRecoilValue(searchCatagory);

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
    <div className="m-4">
      <h1 className="mb-4">
        {searchedCatagory.length > 0 && searchedCatagory + " Blogs"}
      </h1>
      {blogData.filter(
        (item) =>
          item.cat1 === searchedCatagory || item.cat2 === searchedCatagory,
      ).length == 0 && <p>Nothing to show 😴 </p>}
      <div className="flex gap-4 overflow-x-scroll p-4">
        {blogData
          .filter(
            (item) =>
              item.cat1 === searchedCatagory || item.cat2 === searchedCatagory,
          )
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
  );
}

export default SearchBlogs;
