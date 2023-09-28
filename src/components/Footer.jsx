import { CurrentUser } from "../config/atoms";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../server/firebase";

function Footer() {
  const user = useRecoilValue(CurrentUser);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="w-screen h-48 bg-base-800 p-8 flex flex-col gap-4">
      {user && user != "" && (
        <button onClick={() => navigate("/blogs/write")}>Add Blog</button>
      )}
      <button onClick={handleSignOut}>Sign Out</button>
      <button onClick={() => navigate("/news/post")}>Add News</button>
    </div>
  );
}

export default Footer;
