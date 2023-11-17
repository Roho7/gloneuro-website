import { navbardata } from "../data/navbardata";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { User } from "react-feather";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Navbar() {
  const [user, setUser] = useState();
  const [hidden, setHidden] = useState(false);
  const auth = getAuth();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      setUser(userEmail);
    } else {
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      className="max-sm:hidden glass bg-base-100 w-full flex justify-between items-center p-4 sticky top-0 z-50"
    >
      <div className="flex text-base-50 items-center">
        <img
          src="/assets/glonuro-og-logo.png"
          alt=""
          className="h-10 object-contain"
        />
        <h2>GloNeuro</h2>
      </div>
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
    </motion.header>
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
          content != undefined
            ? "nav-tooltip group-hover:scale-100 flex flex-col"
            : ""
        }
      >
        {content?.map((item, index) => {
          return (
            <a
              className="text-base-800 hover:text-base-100"
              key={index}
              href={`/${item}`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
