import { useState } from "react";
import { db } from "../server/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";

function PostEducation() {
  const [newsData, setNewsData] = useState({
    eventDate: "",
    heading: "",
    description: "",
    img: "",
    organisedBy: "",
    venue: "",
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
        await setDoc(doc(db, "Education", newsData.id), {
          eventDate: newsData.eventDate,
          heading: newsData.heading,
          description: newsData.description,
          img: newsData.img,
          organisedBy: newsData.organisedBy,
          venue: newsData.venue,
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
      <h1 className="my-4 text-base-50">Post Education</h1>
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
          name="eventDate"
          id="eventDate"
          onChange={handleChange}
          placeholder="Enter date of event"
        />
        <input
          type="text"
          name="deadline"
          id="deadline"
          onChange={handleChange}
          placeholder="Enter dateline of event"
        />
        <input
          type="text"
          name="organisedBy"
          id="organisedBy"
          onChange={handleChange}
          placeholder="Enter event organiser"
        />
        <input
          type="text"
          name="venue"
          id="venue"
          onChange={handleChange}
          placeholder="Enter venue/online"
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
        <button onClick={handleSubmit}>Post Education</button>
      </div>
    </div>
  );
}

export default PostEducation;
