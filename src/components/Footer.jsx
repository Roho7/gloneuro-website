import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebase";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

function Footer() {
  const [currentUser, setCurrentUser] = useState();
  const cookies = new Cookies();

  const handleSignOut = () => {
    cookies.remove("username");
    signOut(auth);
    location.reload();
  };
  const Auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        const setUser = user.email;
        setCurrentUser(setUser);
      } else {
      }
    });
  }, []);
  return (
    <div className="relative w-full h-full bg-base-500 p-16 grid grid-cols-2 gap-4 z-[48]">
      <div className="flex flex-col">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/opportunities">Opportunities</a>
        <a href="/explore">Explore</a>
        <a href="/discussion">Discussion</a>
      </div>
      {/* <div className="flex flex-col">
        {currentUser && <a onClick={handleSignOut}>Sign Out</a>}
        {currentUser && <a href="/post">Post</a>}
        {!currentUser && <a href="/login">Login</a>}
      </div> */}
    </div>
  );
}

export default Footer;
