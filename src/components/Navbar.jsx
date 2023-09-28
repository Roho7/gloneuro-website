import { useRecoilValue } from "recoil";
import { navbardata } from "../data/navbardata";
import { CurrentUser } from "../config/atoms";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const user = useRecoilValue(CurrentUser);
  const navigate = useNavigate();
  return (
    <div className="glass bg-base-100 w-screen flex justify-between items-center p-4 fixed top-0 z-50">
      <img src="src/assets/logo-1.png" alt="" className="w-32 object-cover" />
      <div className="flex gap-4">
        {navbardata.Navbar.map((item, index) => {
          return (
            <NavElement title={item.title} content={item.content} key={index} />
          );
        })}
      </div>
      {user != "" && user && <span>{user?.email}</span>}
      <input
        type="text"
        placeholder="search"
        className="border rounded-3xl py-2 px-4"
      />
    </div>
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
          <p className="hover:text-base-800" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  </div>
);
export default Navbar;
