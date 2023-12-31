import { Menu } from "react-feather";
import { navbardata } from "../../data/navbardata";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HamMenuHandle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="glass bg-egg-100 p-4 fixed top-0 right-0 z-50 rounded-none"
        onClick={() => setToggle(!toggle)}
      >
        <Menu />
      </button>
      {toggle && <HamMenuItems toggle={setToggle} />}
    </div>
  );
}
const HamMenuItems = ({ toggle }) => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className="fixed h-screen w-1/2 top-0 left-0 z-50 glass p-4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        <ul className="text-white">
          {navbardata.Navbar.map((item, index) => {
            return (
              <li
                key={index}
                className="text-xl cursor-pointer hover:text-base-50"
                onClick={() =>
                  navigate(`/${item.title === "Home" ? "" : item.title}`)
                }
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </motion.div>
      <div
        className="fixed h-screen w-screen bg-base-300 z-[49] opacity-50"
        onClick={() => toggle(false)}
      ></div>
    </>
  );
};
export default HamMenuHandle;
