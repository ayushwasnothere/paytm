import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 flex flex-col py-8 px-6 border-gray-100 border text-center">
        <Heading label="Sign In" />
        <SubHeading label="Enter your credentials to access your account" />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          abel="Email"
          placeholder="example@xyz.com"
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="password"
        />
        <div className="pt-4">
          <Button
            onClick={async () => {
              const res = await axios.post(
                `${BACKEND_URL}/api/v1/user/signin`,
                {
                  username,
                  password,
                },
              );
              await new Promise((r) => {
                localStorage.setItem("token", res.data.token);
                r();
              });
              navigate("/dashboard");
            }}
            label="Sign In"
          />
        </div>
        <BottomWarning
          label="Don't have an account?"
          link="/signup"
          linkText="SignUp"
        />
      </div>
    </div>
  );
};
