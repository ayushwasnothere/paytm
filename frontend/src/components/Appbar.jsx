import { useNavigate } from "react-router-dom";
import { Heading } from "./Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Back } from "./Back";

export const Appbar = () => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setFirstName(res.data.firstName);
      });
  }, []);

  return (
    <div className="w-full px-6 md:px-14 py-4 flex gap-4 justify-between border border-b-gray-400">
      <div className="hidden md:block">
        <Heading label="Payments App" />
      </div>
      <div className="block md:hidden">
        <Heading label="Pay App" />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="hidden md:block font-medium text-xl">
          Hello, {firstName}
        </div>
        <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center font-bold text-xl">
          {firstName ? firstName[0].toUpperCase() : ""}
        </div>
        <div className="flex justify-center items-center pt-2">
          <div
            className="w-10 p-2 pb-2 pt-0"
            onClick={() => {
              localStorage.clear("token");
              navigate("/signin");
            }}
          >
            <Back />
          </div>
        </div>
      </div>
    </div>
  );
};
