import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../server/firebase";

const BlogCard = ({ title, img, author, id }) => {
  const navigate = useNavigate();
  const cookie = new Cookies(null, { path: "/" });

  const handleBlogClick = async (id) => {
    cookie.remove("activeBlog");
    const blogRef = doc(db, "Blogs", id);
    const data = await getDoc(blogRef);
    cookie.set("activeBlog", data.data());
    navigate(`/blogs/:${id}`);
  };
  return (
    <div
      onClick={() => handleBlogClick(id)}
      className="p-4 bg-base-50 w-80 h-3/4 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all ease-linear whitespace-nowrap text-ellipsis overflow-hidden"
    >
      <div className="h-48 mb-4">
        <img
          src={img}
          alt=""
          className=" rounded-xl h-full w-full object-cover"
        />
      </div>
      <h2 className="whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </h2>
      <span className="font-light italic text-base-300"> by {author}</span>
    </div>
  );
};

export default BlogCard;
