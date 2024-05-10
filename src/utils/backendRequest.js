import axios from "axios";
import { BACKEND_BASE_URL } from "./loadEnv";

const fetchAllPosts = async () => {
  try {
    const response = await axios.get(
      `${BACKEND_BASE_URL}/post/all?page=1&limit=10`
    );
    return response.data.posts;
  } catch (err) {
    console.log(err);
  }
};

const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${BACKEND_BASE_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err.response);
  }
};

const fetchUserPosts = async () => {
  try {
    const response = await axios.get(`${BACKEND_BASE_URL}/post/myPosts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
      },
    });
    return response.data.Posts;
  } catch (err) {
    console.log(err);
  }
};

const fetchUserFollowers = async () => {
  try {
    const response = await axios.get(`${BACKEND_BASE_URL}/user/followers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
      },
    });
    return response.data.followers;
  } catch (err) {
    console.log(err);
  }
};

const createNewPost = async (newPost) => {
  try {
    const response = await axios.post(
      `${BACKEND_BASE_URL}/post/create`,
      newPost,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
        },
      }
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export {
  fetchAllPosts,
  fetchUserProfile,
  fetchUserPosts,
  fetchUserFollowers,
  createNewPost,
};
