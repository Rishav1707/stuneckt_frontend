/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  fetchAllUsers,
  userFollowAnotherUser,
  fetchUserProfile,
} from "../utils/backendRequest";

const SideAllUsersBar = ({ setProfile }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers().then((users) => {
      setAllUsers(users);
    });
  }, []);

  const handleFollowUser = (to) => {
    userFollowAnotherUser(to).then(() => {
      fetchUserProfile().then((data) => {
        setProfile(data);
      });
    });
  };

  return (
    <div className="fixed right-[6.7rem] w-[16%] h-[34rem] py-3 bg-white rounded-lg overflow-y-auto border border-gray-300 scrollbar-none">
      <p className="text-center mb-2 font-semibold">Grow your network</p>
      {allUsers.map((user, index) => (
        <div
          key={user._id}
          className={`flex px-3 py-3 items-center justify-between ${
            index < allUsers.length - 1 ? "border-b border-gray-300" : ""
          }`}
        >
          <img
            src={user.profileImg}
            alt="profile"
            className="w-12 h-12 rounded-full"
            loading="lazy"
          />
          <div>
            <span className=" text-sm font-semibold">
              {user.firstName} {user.lastName}
            </span>
            <p className="text-sm text-[#a4a4a4]">
              {user.about.slice(0, 20)}...
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              handleFollowUser(user._id);
            }}
          >
            <span className="material-symbols-outlined text-xl">
              person_add
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideAllUsersBar;
