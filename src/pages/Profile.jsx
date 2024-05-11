/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchUserProfile } from "../utils/backendRequest";
import EditProfileModal from "../components/EditProfileModal";

const Profile = ({ profile, setProfile }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  useEffect(() => {
    fetchUserProfile().then((data) => {
      setProfile(data);
    });
  }, []);

  const handleUserProfile = () => {
    setIsEditClicked(!isEditClicked);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white mt-16 w-1/3 h-[33.5rem] rounded-lg border border-gray-300">
        <div className="text-end pt-3 pr-3">
          <span
            onClick={handleUserProfile}
            className="material-symbols-outlined cursor-pointer"
          >
            edit
          </span>
        </div>
        {isEditClicked && (
          <EditProfileModal
            isEditClicked={isEditClicked}
            setIsEditClicked={setIsEditClicked}
            setProfile={setProfile}
            profile={profile}
          />
        )}
        <div className="flex items-center justify-center">
          <img
            src={profile.profileImg}
            alt="profile"
            className="w-40 h-40 rounded-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-2xl font-bold">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="text-md text-slate-500">{profile.username}</span>
        </div>
        <div className="mt-2 px-4 text-[#a4a4a4]">
          <p>{profile.about}</p>
        </div>
        <br />
        <hr />
        <br />
        <div className="flex justify-between px-4 py-1 font-semibold text-sm hover:bg-gray-100 cursor-pointer">
          <span className="text-[#848484]">Followers</span>
          <span className="text-blue-600">{profile.followers?.length}</span>
        </div>
        <div className="flex justify-between px-4 py-1 font-semibold text-sm hover:bg-gray-100 cursor-pointer">
          <span className="text-[#848484]">Following</span>
          <span className="text-blue-600">{profile.following?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
