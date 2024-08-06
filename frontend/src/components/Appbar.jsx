import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { useEffect, useState } from "react";
import axios from "axios";

export const Appbar = () => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setFirstName(res.data.firstName);
      });
  }, []);

  return (
    <div className="w-full px-14 py-4 flex gap-4 justify-between border border-b-gray-400">
      <Heading label="Payments App" />
      <div className="flex gap-4 justify-center items-center">
        <div className="font-medium text-xl">Hello, {firstName}</div>
        <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center font-bold text-xl">
          {firstName ? firstName[0].toUpperCase() : ""}
        </div>
        <div className="flex justify-center items-center pt-2">
          <Button
            onClick={() => {
              localStorage.clear("token");
              navigate("/signin");
            }}
            label="Logout"
          />
        </div>
      </div>
    </div>
  );
};
