import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { motion } from "framer-motion";

const BlogCard = ({ title, img, author, id }) => {
  const navigate = useNavigate();
  const cookie = new Cookies(null, { path: "/" });

  const handleBlogClick = async (id) => {
    cookie.remove("activeBlog");
    cookie.set("activeBlog", id);
    navigate(`/blogs/:${id}`);
  };

  return (
    <motion.div
      onClick={() => handleBlogClick(id)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1 }}
      className="p-4 bg-base-300 w-80 h-full rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all ease-linear whitespace-nowrap text-ellipsis overflow-hidden"
    >
      <div className="h-48 mb-4">
        <img
          src={img}
          alt=""
          className=" rounded-xl h-full w-full object-cover"
        />
      </div>
      <h2 className="whitespace-nowrap text-ellipsis overflow-hidden text-white font-bold">
        {title}
      </h2>
      <span className="font-light italic text-base-50"> by {author}</span>
    </motion.div>
  );
};

export default BlogCard;
