/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchAllPosts } from "../utils/backendRequest";
import AllPosts from "../components/AllPosts";
import SideProfileBar from "../components/SideProfileBar";
import CreatePost from "../components/CreatePost";
import CreatePostModal from "../components/CreatePostModal";

const Dashboard = ({ profile }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchAllPosts().then((posts) => {
      setAllPosts(posts);
    });
  }, []);

  return (
    <div className="flex justify-center pt-28">
      <div className="flex w-3/4 gap-4">
        <SideProfileBar profile={profile} />
        <div className="w-3/5">
          <CreatePost
            profile={profile}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          {isModalOpen && (
            <CreatePostModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setImage={setImage}
              setTitle={setTitle}
              setContent={setContent}
              image={image}
              title={title}
              content={content}
              setAllPosts={setAllPosts}
            />
          )}
          <AllPosts allPosts={allPosts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
