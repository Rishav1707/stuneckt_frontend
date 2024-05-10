import { useEffect, useState } from "react";
import { fetchUserProfile } from "../utils/backendRequest";

const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetchUserProfile().then((data) => {
      setProfile(data);
    });
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white w-1/3 h-[31rem] rounded-lg border border-gray-300">
        <div className="flex items-center justify-center mt-9">
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
