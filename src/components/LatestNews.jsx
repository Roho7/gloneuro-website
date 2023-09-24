import { News } from "../data/news";
function LatestNews() {
  return (
    <div className="m-4 p-8 rounded-xl bg-base-100">
      <h1 className="text-4xl">Latest News</h1>
      {News.map((item, index) => {
        return (
          <div
            key={index}
            className="flex w-full justify-between my-4 py-4 border-y border-base-300"
          >
            <span>{item.date}</span>
            <div className="w-1/4 h-40 rounded-xl overflow-hidden">
              <img src={item.img} alt="" className="object-cover" />
            </div>
            <div className="w-2/5">
              <h1 className="text-2xl">{item.heading}</h1>
              <span className="">{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LatestNews;
