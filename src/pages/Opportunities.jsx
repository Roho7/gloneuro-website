import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../server/firebase";
import EducationCard from "../components/EducationCard";
import ResearchCard from "./ResearchCard";

function Opportunities() {
  const [eduData, setEduData] = useState([]);
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const eduRef = collection(db, "Education");
      const resRef = collection(db, "Research");
      const eduData = await getDocs(eduRef);
      const resData = await getDocs(resRef);
      const filteredEduData = eduData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredResData = resData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEduData(filteredEduData);
      setResData(filteredResData);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/2526097/pexels-photo-2526097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">Opportunities</h1>
      </div>
      <div className="page-container">
        <h1 className="text-4xl text-base-50">Education And Training</h1>
        <div className="grid grid-rows-1 grid-flow-col gap-2 overflow-auto">
          {eduData.map((item, index) => {
            return <EducationCard data={item} key={index} />;
          })}
        </div>
        <h1 className="text-4xl text-base-50">Research</h1>
        <div className="grid grid-rows-1 grid-flow-col gap-2 overflow-auto">
          {resData.map((item, index) => {
            return <ResearchCard data={item} key={index} />;
          })}
        </div>
        <h1 className="text-4xl text-base-50">Upcoming Conferences</h1>
      </div>
    </div>
  );
}

export default Opportunities;
