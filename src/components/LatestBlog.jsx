import { ArrowUpRight } from "react-feather";

function LatestBlog() {
  return (
    <div className="glass group absolute right-20 bottom-20 w-52 max-h-40 p-4 bg-base-50 rounded-xl overflow-hidden object-cover cursor-pointer">
      <h2 className="font-light">Latest Blog</h2>
      <h1 className="text-xl font-bold mb-4">Alzheimer's a dillemma</h1>
      <div className="flex">
        <span>Read full article</span>
        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear" />
      </div>
    </div>
  );
}

export default LatestBlog;
