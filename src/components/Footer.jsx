import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebase";
import { useState } from "react";

function Footer() {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    location.reload();
  };
  const Auth = getAuth();

  onAuthStateChanged(Auth, (user) => {
    if (user) {
      const setUser = user.email;
      setCurrentUser(setUser);
    } else {
    }
  });
  return (
    <div className="relative w-full h-full bg-base-500 p-16 grid grid-cols-2 gap-4 z-50">
      <div className="flex flex-col">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Opportunities</a>
        <a href="">Explore</a>
        <a href="">Discussion</a>
      </div>
      <div className="flex flex-col">
        {currentUser && (
          <a onClick={() => navigate("/blogs/write")}>Add Blog</a>
        )}
        {currentUser && <a onClick={() => navigate("/post/news")}>Add News</a>}
        {currentUser && (
          <a onClick={() => navigate("/post/education")}>Add Education</a>
        )}
        {currentUser && (
          <a onClick={() => navigate("/post/research")}>Add Research</a>
        )}
        {currentUser && <a onClick={handleSignOut}>Sign Out</a>}
        {!currentUser && <a onClick={() => navigate("/login")}>Login</a>}
      </div>
    </div>
  );
}

export default Footer;
