import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../server/firebase";

const Protected = () => {
  const [user, setUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userd) => {
      if (userd) {
        setUser(userd.displayName);
      } else {
      }
    });
  });
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
