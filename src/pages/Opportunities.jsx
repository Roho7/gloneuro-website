import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../server/firebase";
import EducationCard from "../components/EducationCard";

function Opportunities() {
  const [eduData, setEduData] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogRef = collection(db, "Education");
      const data = await getDocs(blogRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEduData(filteredData);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/1635935/pexels-photo-1635935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">Discover</h1>
      </div>
      <h1 className="p-4 text-4xl text-base-50">Education And Training</h1>
      {eduData.map((item, index) => {
        return <EducationCard data={item} key={index} />;
      })}
      <h1 className="p-4 text-4xl text-base-50">Research</h1>
      <h1 className="p-4 text-4xl text-base-50">Upcoming Conferences</h1>
    </div>
  );
}

export default Opportunities;
