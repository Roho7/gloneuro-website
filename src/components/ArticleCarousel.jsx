// import { BlogData } from "../data/blogdata";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../server/firebase";
import { useEffect, useState } from "react";

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
      console.log(blogData);
    };
    getBlogs();
  }, []);
  return (
    <div className="m-4">
      <h1 className="mb-4">Latest Blog</h1>
      <div className="flex gap-4 overflow-x-scroll p-4">
        {blogData.map((item, index) => {
          return (
            <CarouselCard
              key={index}
              title={item.title}
              img={item.img}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
}

const CarouselCard = ({ title, img, author }) => {
  return (
    <div className="p-4 bg-base-50 w-72 h-3/4 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all ease-linear whitespace-nowrap text-ellipsis overflow-hidden">
      <div className="h-48">
        <img
          src={img}
          alt=""
          className="mb-4 rounded-xl h-full w-full object-cover"
        />
      </div>
      <h2 className="whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </h2>
      <span className="font-light italic text-base-300"> by {author}</span>
    </div>
  );
};

export default ArticleCarousel;
