import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NoAuth = ({ children }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/user/me", {
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
  if (isLogged) {
    navigate("/dashboard");
  } else {
    return children;
  }
};
