import { useState } from "react";
import "../styles/UserProfile.css";
import { LatestPosts } from "./LatestPosts";
import { NewPostComponent } from "./NewPost";
import { UserProfileUpperSide } from "./UserProfileUpperSide";

export const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="UserProfile">
      <UserProfileUpperSide
        fullName="ahmadou bangoura"
        avatarSrc="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      />
      <div className="UserProfile_Posts">
        <NewPostComponent setPosts={setPosts} />
        <LatestPosts latestPosts={posts} />
      </div>
    </div>
  );
};
