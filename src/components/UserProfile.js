import { useState } from "react";
import "../styles/UserProfile.css";
import { NewPostComponent } from "./NewPost";
import { PostComponent } from "./Post";

export const UserProfile = () => {
  const [newPost, setNewPost] = useState({});
  return (
    <div className="UserProfile">
      <UserProfileUpperSide
        fullName="ahmadou bangoura"
        avatarSrc="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      />
      <div className="UserProfile_Posts">
        <NewPostComponent setNewPost={setNewPost} />
        <LatestPost newPost={newPost} />
      </div>
    </div>
  );
};

const UserProfileUpperSide = (props) => {
  return (
    <div className="UserProfile__UpperSide">
      <span className="UserProfile__FullName">{props.fullName}</span>
      <img
        className="UserProfile__Avatar"
        alt="profile img"
        src={props.avatarSrc}
      ></img>
    </div>
  );
};

const LatestPost = (props) => {
  return (
    <div className="LatestPost">
      <h4 className="LatestPost__title">Latest post</h4>
      <PostComponent
        title={props.newPost.title}
        description={props.newPost.description}
      />
    </div>
  );
};
