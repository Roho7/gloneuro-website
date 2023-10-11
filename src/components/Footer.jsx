import { CurrentUser } from "../config/atoms";
import { useRecoilValue } from "recoil";
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
    <div className="w-full h-full bg-base-500 p-8 flex flex-col gap-4">
      {currentUser && (
        <button onClick={() => navigate("/blogs/write")}>Add Blog</button>
      )}
      {currentUser && (
        <button onClick={() => navigate("/news/post")}>Add News</button>
      )}
      {currentUser && <button onClick={handleSignOut}>Sign Out</button>}
      {!currentUser && (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
}

export default Footer;
