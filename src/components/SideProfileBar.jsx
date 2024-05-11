import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SideProfileBar = ({ profile }) => {
  return (
    <div className="bg-white w-[21%] h-[29.5rem] rounded-lg border border-gray-300">
      <div className="flex items-center justify-center mt-9">
        <img
          src={profile.profileImg}
          alt="profile"
          className="w-20 h-20 rounded-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <span className="text-lg font-semibold">
          {profile.firstName} {profile.lastName}
        </span>
      </div>
      <div className="text-center text-[#a4a4a4] px-2 mt-2">
        <p>
          {profile.about?.length > 210
            ? profile.about.slice(0, 210)
            : profile.about}
          ...
        </p>
      </div>
      <br />
      <hr />
      <br />
      <Link
        to="/user/followers"
        className="flex justify-between px-4 py-1 font-semibold text-sm hover:bg-gray-100 cursor-pointer hover:underline"
      >
        <span className="text-[#848484]">Followers</span>
        <span className="text-blue-600">{profile.followers?.length}</span>
      </Link>
      <div className="flex justify-between px-4 py-1 font-semibold text-sm hover:bg-gray-100 cursor-pointer">
        <span className="text-[#848484]">Following</span>
        <span className="text-blue-600">{profile.following?.length}</span>
      </div>
    </div>
  );
};

export default SideProfileBar;
