import { motion } from "framer-motion";
import { ArrowUpRight, Mic } from "react-feather";

function HeroPodcast() {
  return (
    <motion.div
      className="group glass p-4 flex flex-col justify-between bg-salmon-300 text-salmon-100 rounded-xl object-cover cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
    >
      <h2 className="flex items-center justify-between">
        <Mic /> Latest Podcast
        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear" />
      </h2>
    </motion.div>
  );
}

export default HeroPodcast;
