import { useNavigate } from "react-router-dom";
import { useAuth } from "../server/AuthContext";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const { currentUserState } = useAuth();
  const navigate = useNavigate();

  if (!currentUserState) {
    return navigate("/login");
  } else {
    return children;
  }
}
export default PrivateRoute;
