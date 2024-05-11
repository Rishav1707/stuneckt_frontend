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
  const [validPassword, setValidPassword] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validPassword) return;
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
            validPassword={true}
          />
          <InputBox
            onChange={handlePasswordChange}
            placeholder="123456"
            label={"Password"}
            type={"password"}
            validPassword={validPassword}
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
