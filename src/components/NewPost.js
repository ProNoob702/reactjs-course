import "../styles/NewPost.css";

export const NewPostComponent = () => {
  return (
    <div className="newPost">
      <form>
        <h4>Add new post</h4>
        <div className="newPost__control">
          <label for="title">Title:</label>
          <input id="title" type="text" />
        </div>
        <div className="newPost__control">
          <label for="description">Description:</label>
          <textarea
            id="description"
            // value={this.state.textAreaValue}
            // onChange={this.handleChange}
            rows={2}
          />
        </div>
      </form>
    </div>
  );
};
