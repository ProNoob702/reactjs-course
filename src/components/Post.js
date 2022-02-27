import "../styles/Post.css";

export const PostComponent = (props) => {
  if (!props.title || !props.description) return null;
  return (
    <div className="UserPost">
      <div className="UserPost__content">
        <h3 className="UserPost__Title">{props.title}</h3>
        <p className="UserPost__Description">{props.description}</p>
      </div>
    </div>
  );
};
