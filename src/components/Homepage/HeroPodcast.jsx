import { motion } from "framer-motion";
import { ArrowUpRight } from "react-feather";

function HeroPodcast() {
  return (
    <motion.div
      className="group glass p-4 flex flex-col justify-between bg-salmon-300 text-salmon-100 rounded-xl object-cover cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
    >
      <h2 className="font-light">Latest Podcast</h2>
      {/* <h1 className="text-xl font-bold mb-4">Neurodegeneration Ep2.</h1> */}
      <div className="flex">
        <span>Listen episode</span>
        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear" />
      </div>
    </motion.div>
  );
}

export default HeroPodcast;
