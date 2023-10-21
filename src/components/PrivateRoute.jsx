import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Cookies from "universal-cookie";
import { Loading } from "../config/atoms";
import Loader from "../components/Loader";

const Protected = () => {
  const setLoading = useSetRecoilState(Loading);
  const loading = useRecoilValue(Loading);

  const [user, setUser] = useState();
  const cookies = new Cookies(null, { path: "/" });

  const username = cookies.get("username");
  const checkUser = async () => {
    console.log(username);
    if (username) {
      setUser(username);
    } else {
      setUser();
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return username ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
