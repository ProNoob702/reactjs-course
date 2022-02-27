import { useState } from "react";
import "../styles/NewPost.css";

export const NewPostComponent = (props) => {
  const [localNewPost, setLocalNewPost] = useState({});
  const handleTitleChange = (event) => {
    setLocalNewPost((prevState) => {
      const newState = {
        ...prevState,
        title: event.target.value,
      };
      return newState;
    });
  };

  const handleDescriptionChange = (event) => {
    setLocalNewPost((prevState) => {
      const newState = {
        ...prevState,
        description: event.target.value,
      };
      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setNewPost(localNewPost);
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
