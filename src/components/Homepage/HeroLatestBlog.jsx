import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "react-feather";

function LatestBlog() {
  return (
    <motion.div
      className="group p-4 glass flex flex-col justify-between bg-base-500 text-base-100 rounded-xl object-cover cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
    >
      <h2 className="flex items-center justify-between">
        <BookOpen /> Latest Blog
        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear" />
      </h2>
      {/* <h1 className="text-xl font-bold mb-4">Alzheimer's a dillemma</h1> */}
    </motion.div>
  );
}

export default LatestBlog;
