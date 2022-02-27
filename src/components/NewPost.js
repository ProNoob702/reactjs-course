import "../styles/NewPost.css";

export const NewPostComponent = () => {
  return (
    <div className="newPost">
      <form>
        <div className="newPost__control">
          <label>Title</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};
