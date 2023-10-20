import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../server/firebase";
import { useEffect, useState } from "react";

function LatestNews() {
  const [news, setNews] = useState([]);
  const [newsDate, setNewsDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const newsRef = collection(db, "Education");
      const newsData = await getDocs(newsRef);
      const filteredNewsData = newsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNews(
        filteredNewsData.filter((_, index) => {
          return index <= 3;
        }),
      );
    };
    getData();
  }, []);
  return (
    <div className=" p-8 rounded-xl glass text-base-50">
      <h1>Latest News</h1>
      {news.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="flex lg:flex-row flex-col gap-2 w-full justify-between my-4 py-4 border-y border-base-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <span>{item.eventDate}</span>
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
