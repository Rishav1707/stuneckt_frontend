/* eslint-disable react/prop-types */
const CreatePost = ({ profile, setIsModalOpen }) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg border border-gray-300 p-4 mb-4">
      <div className="w-16">
        <img
          src={profile.profileImg}
          alt=""
          className="w-14 h-14 rounded-full"
          loading="lazy"
        />
      </div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="w-full"
      >
        <input
          placeholder="Start a Post"
          className="w-full px-3 py-4 border rounded-full border-slate-300 cursor-pointer bg-white hover:bg-gray-200 text-sm placeholder-gray-500 hover:placeholder-gray-700 font-medium outline-none"
        />
      </button>
    </div>
  );
};

export default CreatePost;
