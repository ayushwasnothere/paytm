import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 flex flex-col py-8 px-6 border-gray-100 border text-center">
        <Heading label="Sign Up" />
        <SubHeading label="Enter your information to create an account" />
        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          placeholder="John"
        />
        <InputBox
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          placeholder="Smith"
        />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          label="Email"
          placeholder="example@xyz.com"
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Atlest 6-digits"
        />
        <div className="pt-4">
          <Button
            onClick={async () => {
              const res = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  password,
                  firstName,
                  lastName,
                },
              );
              await new Promise((r) => {
                localStorage.setItem("token", res.data.token);
                r();
              });
              navigate("/dashboard");
            }}
            label="Sign Up"
          />
        </div>
        <BottomWarning
          label="Already have an account?"
          link="/signin"
          linkText="Login"
        />
      </div>
    </div>
  );
};
