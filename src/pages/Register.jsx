import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { CurrentUser } from "../config/atoms";
import { auth } from "../server/firebase";

function Register() {
  const setCurrentUser = useSetRecoilState(CurrentUser);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmation: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password != userData.confirmation) {
      alert("Password doesn't match");
    } else if (
      !userData.email ||
      !userData.confirmation ||
      !userData.password
    ) {
      alert("Please fill in the details");
    } else {
      try {
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            // Signed in
            setCurrentUser(userCredential.user);
            // ...
          })
          .catch((error) => {
            console.log(error);
            // ..
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
        <h1>Create a new Account</h1>
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
        <input
          type="password"
          name="confirmation"
          id="confirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Create User</button>
      </div>
    </div>
  );
}

export default Register;
