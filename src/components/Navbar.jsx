import { navbardata } from "../data/navbardata";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function Navbar() {
  const [user, setUser] = useState();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      setUser(userEmail);
    } else {
    }
  });
  return (
    <header className="max-sm:hidden glass bg-base-100 w-full flex justify-between items-center p-4 sticky top-0 z-50">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/logo-1.png?alt=media&token=0f21063a-0fc3-407a-9d52-c9ba627d5193&_gl=1*jao8ue*_ga*MjExOTg3NjYzMi4xNjk0MzMzMTIx*_ga_CW55HF8NVT*MTY5NzM0NzcxNy40Ny4xLjE2OTczNDk5NzAuNTIuMC4w"
        alt=""
        className="w-32 object-cover"
      />
      <div className="flex gap-4 ">
        {navbardata.Navbar.map((item, index) => {
          return (
            <NavElement title={item.title} content={item.content} key={index} />
          );
        })}
      </div>
      {user && <span>{user}</span>}
      {/* <input
        type="text"
        placeholder="search"
        className="border rounded-3xl py-2 px-4"
      /> */}
    </header>
  );
}
function NavElement({ title, content }) {
  const navigate = useNavigate();

  return (
    <div
      className="nav-title group"
      onClick={() => {
        if (title === "Home") {
          navigate("/");
        } else {
          navigate(`/${title}`);
        }
      }}
    >
      {title}
      <div
        className={
          content != undefined ? "nav-tooltip group-hover:scale-100" : ""
        }
      >
        {content?.map((item, index) => {
          return (
            <p className="hover:text-base-100" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
