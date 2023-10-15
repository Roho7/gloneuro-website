import { motion, spring } from "framer-motion";
import { News } from "../../data/news";
function LatestNews() {
  return (
    <div className=" p-8 rounded-xl glass text-base-50">
      <h1>Latest News</h1>
      {News.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="flex lg:flex-row flex-col gap-2 w-full justify-between my-4 py-4 border-y border-base-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <span>{item.date}</span>
            <div className="lg:w-1/4 h-40 rounded-xl overflow-hidden">
              <img src={item.img} alt="" className="object-cover" />
            </div>
            <div className="lg:w-2/5">
              <h1 className="text-2xl">{item.heading}</h1>
              <span className="">{item.description}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default LatestNews;
