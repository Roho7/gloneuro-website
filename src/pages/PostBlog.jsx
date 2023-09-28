import { useState } from "react";
import { db } from "../server/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { navbardata } from "../data/navbardata";

function PostBlog() {
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
        content: blogData.content,
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
        <textarea
          rows={5}
          cols="40"
          name="content"
          onChange={handleChange}
          placeholder="Paste blog here"
          className="p-4 rounded-md"
        ></textarea>
        <button onClick={handleSubmit}>Post Blog</button>
      </div>
    </div>
  );
}

export default PostBlog;
