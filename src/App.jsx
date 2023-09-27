import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import WriteBlog from "./pages/WriteBlog";
import ReadBlogs from "./pages/ReadBlogs";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/write" element={<WriteBlog />} />
          <Route path="/blogs/:blogId" element={<ReadBlogs />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
