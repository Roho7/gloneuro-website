import { navbardata } from "../data/navbardata";

function Catagories() {
  return (
    <div className="m-4">
      <h1 className="mb-4">Categories</h1>
      <div className="flex gap-2 flex-wrap justify-stretch">
        {navbardata.Navbar[1].content.map((item) => {
          return (
            <div className="p-2 border border-base-300 rounded-xl hover:bg-base-100 cursor-pointer">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catagories;
