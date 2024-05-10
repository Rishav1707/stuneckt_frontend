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

const SignupComponent = ({ setIsLoggedIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be atleast 6 characters long");
      return;
    }
    try {
      const newUser = { username, password, firstName, lastName, about };
      const response = await axios.post(
        `${BACKEND_BASE_URL}/user/signup`,
        newUser
      );
      localStorage.setItem("authtoken", response.data.token);
      setFirstName("");
      setLastName("");
      setUsername("");
      setPassword("");
      setAbout("");
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err) {
      console.log("Error in signing up", err.response.data);
    }
  };
  return (
    <form onSubmit={handleSignUp} className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="Rishav"
            label={"First Name"}
            type={"text"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Raj"
            label={"Last Name"}
            type={"text"}
          />
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
          <InputBox
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder="I am a Java Developer"
            label={"About"}
            type={"text"}
          />
          <div className="pt-4">
            <Button label={"Sign up"} type={"submit"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </form>
  );
};

export default SignupComponent;
