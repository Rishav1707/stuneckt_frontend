import { useEffect, useState } from "react";
import { fetchUserPosts } from "../utils/backendRequest";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchUserPosts().then((data) => {
      setUserPosts(data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center p-6 pt-28">
      <div className="w-1/3">
        {userPosts.map((post) => (
          <div
            key={post._id}
            className="p-4 bg-white mb-4 rounded-lg border border-gray-300"
          >
            <div className="flex gap-3">
              <div>
                <img
                  src={post.userId.profileImg}
                  alt=""
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="w-3/4">
                <span className="font-semibold">
                  {post.userId.firstName} {post.userId.lastName}
                </span>
                {post.userId.about && (
                  <p className="text-sm text-gray-500 overflow-hidden whitespace-nowrap">
                    {post.userId.about.length > 70 ? (
                      <>{post.userId.about.substring(0, 70)}...</>
                    ) : (
                      post.userId.about
                    )}
                  </p>
                )}
              </div>
            </div>
            {post.content && (
              <p className="text-gray-800 mt-4">
                {post.content.length > 250 ? (
                  <>{post.content.substring(0, 250)} ...see more</>
                ) : (
                  post.content
                )}
              </p>
            )}
            <div className="mt-4">
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
