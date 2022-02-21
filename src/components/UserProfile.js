import "../styles/UserProfile.css";
import { PostComponent } from "./Post";

export const UserProfile = () => {
  return (
    <div className="UserProfile">
      <UserProfileUpperSide
        fullName="ahmadou bangoura"
        avatarSrc="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      />
      <div className="UserProfile_Posts">
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
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
