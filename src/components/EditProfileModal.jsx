/* eslint-disable react/prop-types */
import { useState } from "react";
import { fetchUserProfile, updateUserProfile } from "../utils/backendRequest";

const EditProfileModal = ({
  profile,
  setProfile,
  isEditClicked,
  setIsEditClicked,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [validPassword, setValidPassword] = useState(true);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    if (!validPassword) return;
    const updatedProfile = { username, password, firstName, lastName, about };
    updateUserProfile(updatedProfile).then(() => {
      fetchUserProfile().then((data) => {
        setProfile(data);
      });
    });
    setIsEditClicked(false);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  return (
    <div
      className={`${
        isEditClicked ? "fixed" : "hidden"
      } overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[100vh] max-h-screen bg-[rgb(0,0,0,0.5)]`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Update Profile
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={() => {
                setIsEditClicked(false);
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={handleProfileUpdate} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  defaultValue={profile.username}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="demo@demo.com"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="123456"
                  onChange={handlePasswordChange}
                  required={!validPassword}
                />
                <span className="text-red-500 text-sm">
                  {validPassword
                    ? ""
                    : "Password must be atleast 6 characters long"}
                </span>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  FirstName
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={profile.firstName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Joe"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  LastName
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  defaultValue={profile.lastName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Doe"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="about"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  About
                </label>
                <textarea
                  id="about"
                  rows="4"
                  defaultValue={profile.about}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="It was developed by Google Lab in 2014, and it is also known as k8s."
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
