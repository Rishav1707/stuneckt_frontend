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

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validPassword) return;
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
            validPassword={true}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Raj"
            label={"Last Name"}
            type={"text"}
            validPassword={true}
          />
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
          <InputBox
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder="I am a Java Developer"
            label={"About"}
            type={"text"}
            validPassword={true}
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
