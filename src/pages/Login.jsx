import { auth } from "../server/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { CurrentUser } from "../config/atoms";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const cookie = Cookies(null, { path: "/" });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      alert("Please fill in the details");
    } else {
      try {
        signInWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            if (user.uid) {
              navigate("/");
            } else {
              alert("Invalid User");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <img src="src/assets/logo-1.png" alt="" />
      <div className="w-1/3 p-4 bg-base-100 flex flex-col gap-4 rounded-xl">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
