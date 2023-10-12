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
    <div className="w-full h-full bg-base-500 p-16 grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Opportunities</a>
        <a href="">Explore</a>
        <a href="">Discussion</a>
      </div>
      <div>
        {currentUser && (
          <a onClick={() => navigate("/blogs/write")}>Add Blog</a>
        )}
        {currentUser && <a onClick={() => navigate("/news/post")}>Add News</a>}
        {currentUser && <a onClick={handleSignOut}>Sign Out</a>}
        {!currentUser && <a onClick={() => navigate("/login")}>Login</a>}
      </div>
    </div>
  );
}

export default Footer;
