import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import ReadBlogs from "./pages/ReadBlogs";
import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import Explore from "./pages/Explore";
import Opportunities from "./pages/Opportunities";
import Discussion from "./pages/Discussion";
import About from "./pages/About";
import { useEffect, useState } from "react";
import HamMenuHandle from "./components/Hamburger/HamMenuHandle";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import PostBlog from "./pages/PostBlog";
import PostNews from "./pages/PostNews";
import PostEducation from "./pages/PostEducation";
import PostResearch from "./pages/PostResearch";
import Protected from "./components/PrivateRoute";

function App() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="">
      <RecoilRoot>
        <Navbar />
        {width < 500 && <HamMenuHandle />}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/"} element={<Homepage />} />
          <Route path="/blogs/:blogId" element={<ReadBlogs />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" index element={<Post />} />
          <Route path="/post/blogs" element={<PostBlog />} />
          <Route path="/post/news" element={<PostNews />} />
          <Route path="/post/education" element={<PostEducation />} />
          <Route path="/post/research" element={<PostResearch />} />
        </Routes>
        {/* <Footer /> */}
      </RecoilRoot>
    </div>
  );
}

export default App;
