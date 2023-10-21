import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebase";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

function Discussion() {
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
    <div>
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/6625921/pexels-photo-6625921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">Discussion</h1>
      </div>
      <div className="p-4">
        <h1 className="text-4xl text-base-50">Upcoming GloNeuro Talks</h1>
        <h1 className="text-4xl text-base-50">All GloNeuro Talks</h1>
        <h1 className="text-4xl text-base-50">Socials</h1>
        <div className="flex flex-col w-1/2">
          <a href="/login">Login</a>
          {currentUser && <button onClick={handleSignOut}>Signout</button>}
        </div>
      </div>
    </div>
  );
}

export default Discussion;
