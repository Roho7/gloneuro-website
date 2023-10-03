import { useSetRecoilState } from "recoil";
import { navbardata } from "../data/navbardata";
import { searchCatagory } from "../config/atoms";
import SearchBlogs from "./SearchBlogs";
import { motion } from "framer-motion";

function Catagories() {
  const setSearchCatagory = useSetRecoilState(searchCatagory);
  const handleCatagoryClick = (item) => {
    setSearchCatagory(item);
  };
  return (
    <motion.div
      className="m-4 p-8 rounded-xl bg-base-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <h1 className="mb-2" id="categories">
        Categories
      </h1>
      <h3 className="mb-4">Click a button to filter</h3>
      <div className="flex gap-2 flex-wrap justify-stretch">
        {navbardata.Navbar[1].content.map((item, index) => {
          return (
            <button
              className="p-2 border border-base-300 rounded-xl hover:bg-grass-100 cursor-pointer"
              onClick={() => handleCatagoryClick(item)}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
      <SearchBlogs />
    </motion.div>
  );
}

export default Catagories;
