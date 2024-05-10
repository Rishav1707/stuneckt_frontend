/* eslint-disable react/prop-types */
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import InputBox from "./InputBox";
import Button from "./Button";
import BottomWarning from "./BottomWarning";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../utils/loadEnv";

const SigninComponent = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be atleast 6 characters long");
      return;
    }
    try {
      const user = { username, password };
      const response = await axios.post(
        `${BACKEND_BASE_URL}/user/signin`,
        user
      );
      localStorage.setItem("authtoken", response.data.token);
      setUsername("");
      setPassword("");
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSignIn} className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="rishavraj@gmail.com"
            label={"Email"}
            type={"email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
            type={"password"}
          />
          <div className="pt-4">
            <Button label={"Sign in"} type={"submit"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </form>
  );
};

export default SigninComponent;
