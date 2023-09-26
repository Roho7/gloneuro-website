import { ArrowUpRight } from "react-feather";

function HeroPodcast() {
  return (
    <div className="glass group p-4 bg-grass-100 rounded-xl object-cover cursor-pointer">
      <h2 className="font-light">Latest Podcast</h2>
      <h1 className="text-xl font-bold mb-4">Neurodegeneration Ep2.</h1>
      <div className="flex">
        <span>Listen episode</span>
        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-linear" />
      </div>
    </div>
  );
}

export default HeroPodcast;
