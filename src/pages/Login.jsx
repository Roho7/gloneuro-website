import { auth } from "../server/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const cookies = new Cookies();
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
            if (user.uid) {
              cookies.set("username", user.email);
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
      <img
        src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/logo-1.png?alt=media&token=0f21063a-0fc3-407a-9d52-c9ba627d5193"
        alt=""
      />
      <div className=" m-4 lg:w-1/3 p-4 bg-base-100 flex flex-col gap-4 rounded-xl">
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
