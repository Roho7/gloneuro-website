import { navbardata } from "../data/navbardata";

function Navbar() {
  return (
    <div className="glass w-screen flex justify-between items-center p-4 fixed top-0 z-50">
      <div className="flex gap-4">
        {navbardata.Navbar.map((item) => {
          return <NavElement title={item.title} content={item.content} />;
        })}
      </div>
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
      {content?.map((item) => {
        return <p className="hover:text-base-800">{item}</p>;
      })}
    </div>
  </div>
);
export default Navbar;
