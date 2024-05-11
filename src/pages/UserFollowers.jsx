import { useEffect, useState } from "react";
import { fetchUserFollowers } from "../utils/backendRequest";
import NoFollowers from "../components/NoFollowers";

const UserFollowers = () => {
  const [userFollowers, setUserFollowers] = useState([]);

  useEffect(() => {
    fetchUserFollowers().then((follower) => {
      setUserFollowers(follower);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 pt-28">
      {userFollowers.length === 0 && <NoFollowers />}
      <div className="w-2/4 bg-white rounded-lg">
        {userFollowers.length > 0 &&
          userFollowers.map((follower) => (
            <div
              key={follower._id}
              className="flex gap-4 items-center p-4 border-t border-gray-300"
            >
              <img
                src={follower.profileImg}
                alt="profile"
                className="w-24 h-24 rounded-full"
                loading="lazy"
              />
              <div>
                <span className=" text-lg font-semibold">
                  {follower.firstName} {follower.lastName}
                </span>
                <p className="text-sm text-[#a4a4a4]">{follower.username}</p>
                <p className="text-md text-[#a4a4a4]">
                  {follower.about.slice(0, 75)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserFollowers;
