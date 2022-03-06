export const UserProfileUpperSide = (props) => {
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
