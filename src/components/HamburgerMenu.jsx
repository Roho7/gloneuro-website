import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { navbardata } from "../data/navbardata";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Hamburger = () => (
  <motion.ul variants={variants} className="1">
    {navbardata.Navbar.map((item) => (
      <NavElement
        id={item.id}
        key={item.id}
        text={item.text}
        icon={item.icon}
      />
    ))}
  </motion.ul>
);

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
