import { useParams } from "react-router-dom";

function ReadBlogs() {
  const { blogId } = useParams();
  return <div>ReadBlogs</div>;
}

export default ReadBlogs;
