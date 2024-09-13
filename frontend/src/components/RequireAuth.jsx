import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";

export const RequireAuth = ({ children }) => {
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BACKEND_URL}/api/v1/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsLogged(res.data.isLogged);
      })
      .catch((err) => {
        setIsLogged(err.response.data.isLogged);
      });
  }, []);
  if (!isLogged) {
    return <Navigate to="/signup" replace={true} />;
  } else {
    return children;
  }
};
