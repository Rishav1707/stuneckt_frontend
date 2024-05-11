import { Link } from "react-router-dom";

const NoFollowers = () => {
  return (
    <div className=" mt-40">
      <h1 className="text-6xl text-center p-4 font-extrabold text-primary-600 tracking-tight">
        No Followers Yet
      </h1>
      <p className="text-xl text-center tracking-tight font-bold text-gray-900">
        When you have followers, they&apos;ll be listed here.
      </p>
      <div className="text-center">
        <Link
          to="/dashboard"
          className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
        >
          Grow your network
        </Link>
      </div>
    </div>
  );
};

export default NoFollowers;
