import "../styles/NewPost.css";

export const NewPostComponent = () => {
  return (
    <div className="newPost">
      <h4 className="newPost__title">Add new post</h4>
      <form>
        <div className="newPost__control">
          <label for="title">Title:</label>
          <input id="title" type="text" />
        </div>
        <div className="newPost__control">
          <label for="description">Description:</label>
          <textarea id="description" rows={2} />
        </div>
        <div className="newPost__actions">
          <button type="submit">Add post</button>
        </div>
      </form>
    </div>
  );
};
