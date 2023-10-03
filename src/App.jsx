import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import ReadBlogs from "./pages/ReadBlogs";
import PostBlog from "./pages/PostBlog";
import PostNews from "./pages/PostNews";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/write" element={<PostBlog />} />
          <Route path="/blogs/:blogId" element={<ReadBlogs />} />
          <Route path="/news/post" element={<PostNews />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
