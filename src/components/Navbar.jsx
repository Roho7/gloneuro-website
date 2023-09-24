import { navbardata } from "../data/navbardata";

function Navbar() {
  return (
    <div className="flex gap-2 p-2">
      {navbardata.Navbar.map((item) => {
        return <NavElement title={item.title} content={item.content} />;
      })}
    </div>
  );
}
const NavElement = ({ title, content }) => (
  <div className="nav-title group">
    {title}
    <div className="nav-tooltip group-hover:block">
      {content?.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  </div>
);
export default Navbar;
