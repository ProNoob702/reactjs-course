import { useState } from "react";
import "../styles/UserProfile.css";
import { NewPostComponent } from "./NewPost";
import { PostComponent } from "./Post";
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

const LatestPosts = (props) => {
  return (
    <div className="LatestPosts">
      <h4 className="LatestPosts__title">Latest posts</h4>
      {props.latestPosts.length === 0 ? (
        <p className="LatestPosts__info">List is empty please add new post</p>
      ) : (
        props.latestPosts.map((lastesPostObj) => (
          <PostComponent
            key={lastesPostObj.id}
            title={lastesPostObj.title}
            description={lastesPostObj.description}
          />
        ))
      )}
    </div>
  );
};
