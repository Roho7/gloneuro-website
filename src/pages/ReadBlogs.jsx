import { useRecoilValue } from "recoil";
import Cookies from "universal-cookie";
import { Loading } from "../config/atoms";
import Loader from "../components/Loader";

function ReadBlogs() {
  const cookie = new Cookies();
  const activeBlog = cookie.get("activeBlog");
  console.log(activeBlog);
  const loading = useRecoilValue(Loading);
  if (loading.isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="p-4 w-screen">
        <div className="w-full h-[30vh] mb-4 ">
          <img
            src={activeBlog.img}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {activeBlog.cat1 && <p className="tag"> {activeBlog.cat1} </p>}
        {activeBlog.cat2 && <p className="tag"> {activeBlog.cat2} </p>}
        <h1 className="text-8xl text-base-300">{activeBlog.title}</h1>
        <p className="text-base-300 italic"> by {activeBlog.author} </p>
        <div className="my-4 p-4 rounded-xl bg-base-100">
          <p> {activeBlog.content} </p>
        </div>
      </div>
    );
  }
}

export default ReadBlogs;
