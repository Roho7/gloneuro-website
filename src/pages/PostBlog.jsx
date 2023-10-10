import { useState } from "react";
import { db } from "../server/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { navbardata } from "../data/navbardata";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

function PostBlog() {
  const [blogContent, setBlogContent] = useState("");
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    content: "",
    img: "",
    cat1: "",
    cat2: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const date = Date.now();

    try {
      await setDoc(doc(db, "Blogs", blogData.title), {
        title: blogData.title,
        author: blogData.author,
        content: blogContent,
        img: blogData.img,
        date: Timestamp.fromDate(new Date(date)),
        cat1: blogData.cat1,
        cat2: blogData.cat2,
      });
      alert("Blog posted succesfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full p-4">
      <div className="bg-red-200">{blogContent}</div>

      <h1 className="my-4">Add a blog</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Enter a title"
        />
        <input
          type="text"
          name="img"
          id="img"
          onChange={handleChange}
          placeholder="Enter image link"
        />
        <input
          type="text"
          name="author"
          id="author"
          onChange={handleChange}
          placeholder="Enter author name"
        />
        <div className="flex gap-2">
          <div className="flex flex-col">
            <label htmlFor="cat1">Select First Category</label>
            <select name="cat1" id="cat1" onChange={handleChange}>
              {navbardata.Navbar[1].content.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="cat2">Select Second Category</label>

            <select name="cat2" id="cat2" onChange={handleChange}>
              {navbardata.Navbar[1].content.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <ReactQuill
          theme="snow"
          value={blogContent}
          onChange={setBlogContent}
          className="w-full h-[80vh] mb-10 bg-egg-100 text-base-500"
          modules={modules}
        />
      </div>
      <button onClick={handleSubmit}>Post Blog</button>
    </div>
  );
}

export default PostBlog;
