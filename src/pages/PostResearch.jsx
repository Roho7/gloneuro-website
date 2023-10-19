import { useState } from "react";
import { db } from "../server/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";

function PostResearch() {
  const [newsData, setNewsData] = useState({
    heading: "",
    description: "",
    institution: "",
    position: "",
    deadline: "",
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
        await setDoc(doc(db, "Research", newsData.id), {
          heading: newsData.heading,
          description: newsData.description,
          institution: newsData.institution,
          position: newsData.position,
          deadline: newsData.deadline,
          link: newsData.link,
          date: Timestamp.fromDate(new Date(date)),
        });
        alert("Posted succesfully");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="w-full p-4">
      <h1 className="my-4 text-base-50">Post a Research Opportunity</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="id"
          id="id"
          onChange={handleChange}
          placeholder="Enter an ID"
        />
        <input
          type="text"
          name="heading"
          id="heading"
          onChange={handleChange}
          placeholder="Enter a heading"
        />
        <input
          type="text"
          name="deadline"
          id="deadline"
          onChange={handleChange}
          placeholder="Enter deadline of event"
        />
        <input
          type="text"
          name="institution"
          id="institution"
          onChange={handleChange}
          placeholder="Enter institution"
        />
        <input
          type="text"
          name="position"
          id="position"
          onChange={handleChange}
          placeholder="Enter position"
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
        <button onClick={handleSubmit}>Post Research</button>
      </div>
    </div>
  );
}

export default PostResearch;
