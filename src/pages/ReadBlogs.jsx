import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { activeBlog } from "../config/atoms";

function ReadBlogs() {
  const showBlog = useRecoilValue(activeBlog);
  const { blogId } = useParams();
  return (
    <div>
      <h1>{showBlog.title}</h1>
    </div>
  );
}

export default ReadBlogs;
