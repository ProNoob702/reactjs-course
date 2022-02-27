import { useState } from "react";
import "../styles/NewPost.css";

export const NewPostComponent = (props) => {
  const [titleValue, setTitleValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: titleValue,
      description: descriptionValue,
    };
    props.setNewPost(newPost);
  };

  return (
    <div className="newPost">
      <h4 className="newPost__title">Add new post</h4>
      <form onSubmit={handleSubmit}>
        <div className="newPost__control">
          <label for="title">Title:</label>
          <input id="title" type="text" onChange={handleTitleChange} />
        </div>
        <div className="newPost__control">
          <label for="description">Description:</label>
          <textarea
            id="description"
            rows={2}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="newPost__actions">
          <button type="submit">Add post</button>
        </div>
      </form>
    </div>
  );
};
