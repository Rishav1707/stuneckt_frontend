import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import UserPosts from "./pages/UserPosts";
import UserFollowers from "./pages/UserFollowers";
import Navbar from "./components/Navbar";
import { fetchUserProfile } from "./utils/backendRequest";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [isloggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authtoken") ? true : false
  );

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isloggedIn) {
      fetchUserProfile().then((data) => {
        setProfile(data);
      });
    }
  }, [isloggedIn]);

  useEffect(() => {
    if (isloggedIn) {
      const logoutTimer = setTimeout(() => {
        localStorage.removeItem("authtoken");
        setIsLoggedIn(false);
      }, 1000 * 60 * 60);

      return () => clearTimeout(logoutTimer);
    }
  }, [isloggedIn]);

  return (
    <div
      onClick={() => {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        }
      }}
    >
      {isloggedIn && (
        <Navbar
          toggleDropDown={toggleDropDown}
          isDropdownOpen={isDropdownOpen}
          setIsLoggedIn={setIsLoggedIn}
          profile={profile}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            isloggedIn ? (
              <Navigate to="/dashboard" replace={true} />
            ) : (
              <Navigate to="/signin" replace={true} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isloggedIn ? (
              <Dashboard
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                profile={profile}
              />
            ) : (
              <Navigate to="/signin" replace={true} />
            )
          }
        />
        <Route
          path="/user/profile"
          element={
            isloggedIn ? <Profile /> : <Navigate to="/signin" replace={true} />
          }
        />
        <Route
          path="/user/posts"
          element={
            isloggedIn ? (
              <UserPosts />
            ) : (
              <Navigate to="/signin" replace={true} />
            )
          }
        />
        <Route
          path="/user/followers"
          element={
            isloggedIn ? (
              <UserFollowers />
            ) : (
              <Navigate to="/signin" replace={true} />
            )
          }
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signin"
          element={<Signin setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
