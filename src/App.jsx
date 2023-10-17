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
import Discover from "./pages/Discover";
import Explore from "./pages/Explore";
import Opportunities from "./pages/Opportunities";
import Discussion from "./pages/Discussion";
import About from "./pages/About";
import { useEffect, useState } from "react";
import HamMenuHandle from "./components/Hamburger/HamMenuHandle";
import Footer from "./components/Footer";
import PostResearch from "./pages/PostResearch";
import PostEducation from "./pages/PostEducation";

function App() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [window.innerWidth]);

  return (
    <div className="">
      <AuthProvider>
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
            <Route
              path="/blogs/write"
              element={
                <PrivateRoute>
                  <PostBlog />
                </PrivateRoute>
              }
            />
            <Route
              path="/post/news"
              element={
                <PrivateRoute>
                  <PostNews />
                </PrivateRoute>
              }
            />
            <Route
              path="/post/education"
              element={
                <PrivateRoute>
                  <PostEducation />
                </PrivateRoute>
              }
            />
            <Route
              path="/post/research"
              element={
                <PrivateRoute>
                  <PostResearch />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </RecoilRoot>
      </AuthProvider>
    </div>
  );
}

export default App;
