import { useNavigate } from "react-router-dom";
import { useAuth } from "../server/AuthContext";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const { currentUserState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUserState) {
      return navigate("/login");
    } else {
      return children;
    }
  }, [currentUserState]);
}

export default PrivateRoute;
