import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../server/firebase";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Loading } from "../config/atoms";
import Loader from "./Loader";
import { motion } from "framer-motion";

const BlogCard = ({ title, img, author, id }) => {
  const navigate = useNavigate();
  const cookie = new Cookies(null, { path: "/" });
  const loading = useRecoilValue(Loading);
  const setLoading = useSetRecoilState(Loading);

  const handleBlogClick = async (id) => {
    cookie.remove("activeBlog");
    setLoading({ isLoading: true });
    const blogRef = doc(db, "Blogs", id);
    const data = await getDoc(blogRef);
    cookie.set("activeBlog", data.data());
    navigate(`/blogs/:${id}`);
    setLoading({ isLoading: false });
  };

  if (loading.isLoading) {
    console.log(loading.isLoading);
    return <Loader />;
  } else {
    return (
      <motion.div
        onClick={() => handleBlogClick(id)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
        className="p-4 bg-base-300 w-80 h-3/4 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all ease-linear whitespace-nowrap text-ellipsis overflow-hidden"
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
  }
};

export default BlogCard;
