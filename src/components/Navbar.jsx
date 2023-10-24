import { navbardata } from "../data/navbardata";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { User, UserPlus } from "react-feather";

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
        src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/logo-2.png?alt=media&token=e632f727-de1d-49e0-b909-581f6e12985d&_gl=1*1twhpna*_ga*MjExOTg3NjYzMi4xNjk0MzMzMTIx*_ga_CW55HF8NVT*MTY5ODE3NjU5MC42Ny4xLjE2OTgxNzY2NTUuNjAuMC4w"
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
      {user && (
        <div className="nav-title group">
          <User />
          <div className="nav-tooltip right-0 group-hover:scale-100">
            {user}
          </div>
        </div>
      )}
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
