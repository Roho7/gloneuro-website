import { navbardata } from "../data/navbardata";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function Navbar() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      setUser(userEmail);
    } else {
    }
  });
  return (
    <header className=" max-sm:hidden glass bg-base-100 w-full flex justify-between items-center p-4 sticky top-0 z-50">
      <img src="src/assets/logo-1.png" alt="" className="w-32 object-cover" />
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
const NavElement = ({ title, content }) => (
  <div className="nav-title group">
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
export default Navbar;
