import { useState } from "react";
import { db } from "../server/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";

function PostNews() {
  const [newsData, setNewsData] = useState({
    eventDate: "",
    heading: "",
    img: "",
    description: "",
    link: "",
  });
  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (newsData.description === "" || newsData.heading === "") {
      alert("Please enter valid details");
    } else {
      const date = Date.now();
      try {
        await setDoc(doc(db, "Blogs", newsData.heading), {
          eventDate: newsData.eventDate,
          heading: newsData.heading,
          img: newsData.img,
          description: newsData.description,
          link: newsData.link,
          date: Timestamp.fromDate(new Date(date)),
        });
        console.log("succesfull");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="w-full p-4">
      <h1 className="my-4 text-base-50">Post a News</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="heading"
          id="heading"
          onChange={handleChange}
          placeholder="Enter a heading"
        />
        <input
          type="text"
          name="eventDate"
          id="eventDate"
          onChange={handleChange}
          placeholder="Enter date of event"
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
          name="link"
          id="link"
          onChange={handleChange}
          placeholder="Enter event link"
        />
        <textarea
          rows={5}
          cols="40"
          name="description"
          onChange={handleChange}
          placeholder="Enter Description"
          className="p-4 rounded-md"
        ></textarea>
        <button onClick={handleSubmit}>Post Blog</button>
      </div>
    </div>
  );
}

export default PostNews;
