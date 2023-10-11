import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./server/AuthContext";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import ReadBlogs from "./pages/ReadBlogs";
import PostBlog from "./pages/PostBlog";
import PostNews from "./pages/PostNews";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <RecoilRoot>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/blogs/:blogId" element={<ReadBlogs />} />
            <Route
              path="/blogs/write"
              element={
                <PrivateRoute>
                  <PostBlog />
                </PrivateRoute>
              }
            />
            <Route
              path="/news/post"
              element={
                <PrivateRoute>
                  <PostNews />
                </PrivateRoute>
              }
            />
            {/* <Route path="/blogs/write" element={<PostBlog />} />
          <Route path="/news/post" element={<PostNews />} /> */}
          </Routes>
        </RecoilRoot>
      </AuthProvider>
    </div>
  );
}

export default App;
