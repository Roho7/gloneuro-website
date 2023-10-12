import { useRecoilValue } from "recoil";
import Cookies from "universal-cookie";
import { Loading } from "../config/atoms";
import Loader from "../components/Loader";
import { useEffect } from "react";

function ReadBlogs() {
  const cookie = new Cookies();
  const activeBlog = cookie.get("activeBlog");
  const blogDate = new Date(activeBlog.date.seconds * 1000).toDateString();
  const loading = useRecoilValue(Loading);

  useEffect(() => {
    const container = document.querySelector("#content");
    container.innerHTML = activeBlog.content;
  }, []);

  if (loading.isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="p-4 w-screen">
        <div
          className="relative w-full lg:h-[40vh] mb-4 p-4 flex flex-col justify-between rounded-xl"
          style={{
            backgroundImage: `url(${activeBlog.img})`,
            objectFit: "cover",
            backgroundSize: "150%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10">
            <div className="flex">
              {activeBlog.cat1 && <p className="tag"> {activeBlog.cat1} </p>}
              {activeBlog.cat2 && <p className="tag"> {activeBlog.cat2} </p>}
            </div>
            <h1 className="text-5xl lg:text-8xl text-white">
              {activeBlog.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full bg-base-800 opacity-20 rounded-xl"></div>
        </div>
        <p className="text-base-100 italic"> by {activeBlog.author} </p>
        <p className="text-base-100 italic"> {blogDate} </p>
        <div id="content" className=" my-4 p-6 rounded-xl bg-egg-100"></div>
      </div>
    );
  }
}

export default ReadBlogs;
